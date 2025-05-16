const fetchReviewsData = async (sheetTab = "4") => {
  try {
    const sheetId = "1akGWMfXXJXlqJLSKcYJ-NUr2fGrzuGEEHGnO3y8S_-c";
    const baseUrl = "https://opensheet.elk.sh/";

    if (!sheetId || !baseUrl) {
      throw new Error("Missing environment variables for Google Sheets API");
    }

    const apiUrl = `${baseUrl}${sheetId}/${sheetTab}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch sheet data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching Reviews data:", error);
    return null;
  }
};

export { fetchReviewsData };