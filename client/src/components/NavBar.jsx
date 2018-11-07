import React from 'react';
import styles from '../../dist/style.css';

var NavBar = () => {
	const navsArray = [
		'https://i.postimg.cc/PqJCRVpq/Screen-Shot-2018-11-06-at-11-05-32-PM.png',
		'https://i.postimg.cc/JhFsV3Z5/Screen-Shot-2018-11-06-at-11-06-09-PM.png',
	];

	function getRandomInt(min, max) {
	  const minVal = Math.ceil(min);
	  const maxVal = Math.floor(max);
	  return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
	}

	return (
		<div>
			<img src={navsArray[getRandomInt(0, navsArray.length)]} alt="navigationBar" className={styles.navbar} />
		</div>
	);
};

export default NavBar;