const typeMessage = function(message) {
  let time = 0;
  message = message + "\n";
  const type = () => {
    for (const charInd in message) {
      setTimeout(() => {
        process.stdout.write(message[charInd]);
      }, time);
      time += 50;
    }
  };
  type();
};


typeMessage("hello there from lighthouse labs");