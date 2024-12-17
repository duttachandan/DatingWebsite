export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const userLogin = async (username, password) => {
  try {
    const response = await fetch(
      `${BASE_URL}/public/login?username=${username}&password=${password}`,
      {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        }
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
    throw new Error("Failed to login");
  }
};


export const generateQrCode = async () => {
  try{
    const response = await fetch(`${BASE_URL}/public/get-qr-code`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    console.log(data);
    return data;
  }catch(error){
    console.log(error.message);
    throw new Error("Failed to get QR Code");
  }
}

