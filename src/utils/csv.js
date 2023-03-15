import Papa from 'papaparse';

const csvStringToArray = csvString => {
  const data = {
    columnNames: [],
    rows: [],
  };

  try {
    const csv = Papa.parse(csvString);
    data.columnNames = csv?.data?.[0] || [];
    data.rows = csv?.data?.slice(1) || [];

    return data;
  } catch {}

  return data;
};

export { csvStringToArray };
