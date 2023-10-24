export default async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data.slip.advice;
  } catch (error) {
    console.error("Error fetching advice: ", error);
    return "An error occurred. Please try again later.";
  }
}
