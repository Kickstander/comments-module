const faker = require('faker');
const Comment = require('./database/index.js').Comment;
const fs = require('fs');

function getRandomInt(min, max) { // random integer generator
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
}

function isCreator(percentLikely) { // true false boolean for per randomly generator creator profile
  if (getRandomInt(1, 101) < percentLikely) {
    return true;
  }
  return false;
}

function getRandomProfilePic() { // default and other profiles pictures
  const defaultProfilePic = "https://i.postimg.cc/3JMZ83vC/Screen-Shot-2018-11-01-at-10-56-59-AM.png";
  const otherPics = [
    "https://i.postimg.cc/dV6RjdS4/Screen-Shot-2018-11-01-at-10-57-32-AM.png",
    "https://i.postimg.cc/8CnhqGGv/Screen-Shot-2018-11-01-at-10-57-47-AM.png",
    "https://i.postimg.cc/W3B017hb/Screen-Shot-2018-11-01-at-10-57-57-AM.png",
    "https://i.postimg.cc/PxpmH7fR/Screen-Shot-2018-11-01-at-10-58-18-AM.png",
    "https://i.postimg.cc/Z5WYwzw2/Screen-Shot-2018-11-01-at-11-02-00-AM.png",
    "https://i.postimg.cc/JzSrgYgn/Screen-Shot-2018-11-01-at-11-02-52-AM.png",
    "https://i.postimg.cc/rmk8y0q2/Screen-Shot-2018-11-01-at-11-03-06-AM.png",
    "https://i.postimg.cc/DzsvKdkc/Screen-Shot-2018-11-01-at-11-03-14-AM.png",
    "https://i.postimg.cc/RFLvWS06/Screen-Shot-2018-11-01-at-11-03-53-AM.png",
    "https://i.postimg.cc/kGj9yTK7/Screen-Shot-2018-11-01-at-11-03-59-AM.png",
    "https://i.postimg.cc/mZVbRgqK/Screen-Shot-2018-11-01-at-11-04-09-AM.png",
    "https://i.postimg.cc/NFGBT3yN/Screen-Shot-2018-11-01-at-11-04-20-AM.png",
  ];
  const intRange = otherPics.length * 2; // double range... if random number greateer than range === default profile pic
  const randomInt = getRandomInt(0, intRange);
  if (randomInt >= otherPics.length) {
    return defaultProfilePic;
  }
  return otherPics[randomInt]; // else some random person face from otherpics array
}

function randomBodyLength() {   // random body length, top half will will double paragraph
  return faker.lorem.paragraphs(1).replace('\n', ' ');
}

const stream = fs.createWriteStream('./comments.csv', {flags: 'a'});

stream.write('projectId,author,authorIsCreator,profilePicture,createdAt,body,replies\n');

const records = 10 * 1000000;

let i = 0;
let entry = 0;

let start = new Date();
const generate = () => {
  while (i < records) { // per entries
    for (let j = 0; j < getRandomInt(1, 20); j += 1) { 
      let projectId = i + 1;
      let author = faker.name.findName();
      let authorIsCreator = isCreator(1);
      let profilePicture = getRandomProfilePic();
      let createdAt = faker.date.recent();
      let body = randomBodyLength();
      if ((i + 1) % (records/10000) === 0) {
        console.clear();
        console.log(`${((i/records)*100).toFixed(2)}% complete...`);
      }
      if (!stream.write(`${projectId},${author},${authorIsCreator},${profilePicture},${createdAt},${body}\n`)) {
        return;
      }
      entry += 1;
    }
    i += 1;
  }
  stream.end();
  let end = new Date();
  console.log(`${end - start} milliseconds or ${(end - start)/60000} minutes to write ${records} records and ${entry} entries`);
  
}
stream.on('drain', () => {
  generate();
});
generate();


// fs.writeFile('newCommentData.json', JSON.stringify(projects), function (err) { // write file with node (JSONed first before writing in node)
//   if (err) 
//       return console.log(err);
//   console.log('file write success');
// });

// console.log('comments array', JSON.stringify(commentData), commentData.length);

// if (i % 10000 === 0) {
//   console.clear();
//   console.log(i, " entries logged");
// }