const fetchJourneyData = async (sheetTab = "7") => {
  try {
    const sheetId = '1akGWMfXXJXlqJLSKcYJ-NUr2fGrzuGEEHGnO3y8S_-c';
    const baseUrl = 'https://opensheet.elk.sh/';

    if (!sheetId || !baseUrl) {
      throw new Error('Missing environment variable for Google Sheets API');
    }

    const apiUrl = `${baseUrl}${sheetId}/${sheetTab}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch sheet data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetcing Journey data:', error);
    return null;
  }
};

export { fetchJourneyData };
