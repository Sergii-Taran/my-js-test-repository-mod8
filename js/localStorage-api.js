export function addDataToLocalStorage(key, value) {
  try {
    const seriallizeState = JSON.stringify(value);
    localStorage.setItem(key, seriallizeState);
  } catch (error) {
    console.log(error);
  }
}

export function getdataFromlocalStorage(key) {
  try {
    const seriallizeState = localStorage.getItem(key);
    return seriallizeState === null ? undefined : JSON.parse(seriallizeState);
  } catch (error) {
    console.log(error);
  }
}

export function removeDatafromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}
