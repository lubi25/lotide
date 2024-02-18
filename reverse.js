const reverse = function(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

if (require.main === module) {
  const args = process.argv.slice(2);
  args.forEach(str => {
    console.log(reverse(str));
  });
}

module.exports = reverse;