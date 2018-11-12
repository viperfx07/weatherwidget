export default str => str.split('').map((char, index) => (index == 0 ? char.toUpperCase() : char)).join('');
