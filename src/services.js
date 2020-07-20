export const fetchData = async function(url) {
  try {
    var data;

    const timer = async function() {
      return new Promise(resolve => {
        setTimeout(async () => {
          data = await (await fetch(url)).json();
          resolve(data);
        }, 1000);
      });
    };

    data = await timer();

    return data;
  } catch (e) {
    return null;
  }
};
