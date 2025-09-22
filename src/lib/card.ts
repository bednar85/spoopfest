export const getFlagCode = (primaryLanguage: string) => {
  switch (primaryLanguage) {
    case "Chinese":
      return "CN";
    case "Danish":
      return "DK";
    case "English":
      return "US";
    case "French":
      return "FR";
    case "German":
      return "DE";
    case "Hindi":
      return "IN";
    case "Italian":
      return "IT";
    case "Japanese":
      return "JP";
    case "Korean":
      return "KR";
    case "Macedonian":
      return "MK";
    case "Norwegian":
      return "NO";
    case "Persian (Farsi)":
      return "IR";
    case "Polish":
      return "PL";
    case "Russian":
      return "RU";
    case "Spanish":
      return "ES";
    default:
      return null; // or some default value
  }
}