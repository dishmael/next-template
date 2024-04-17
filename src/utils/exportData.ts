import { getTimestamp } from ".";

type FileType = "csv" | "json";
type Exportable = {
  data: object[];
  fileType: FileType;
  fileName: string;
};

/**
 * download takes the exportable data and downloads it to CSV or JSON
 * 
 * @param data the stringified object array
 * @param type mime-type (e.g. application/json)
 * @param fileName the filename of the downloaded content
 */
const download = (data: string, type: string, fileName: string) => {
  // Create a Blob object from the CSV string
  const blob = new Blob([data], { type: type });

  // Create a URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Create a temporary anchor element
  const a = document.createElement("a");

  // Set the href and download attributes of the anchor
  a.href = url;
  a.download = fileName;

  // Append the anchor to the body
  document.body.appendChild(a);

  // Simulate a click on the anchor
  a.click();

  // Remove the anchor from the body
  document.body.removeChild(a);
};

/**
 * exportData converts an array of objects to a format that can be downloaded
 * 
 * @param data an array of objects
 * @param fileType the mime-type; csv or json
 * @param fileName the prefix for the output file name
 */
const exportData = ({
  data,
  fileType = "json",
  fileName = "data",
}: Exportable) => {
  const outputFileName = `${fileName}-${getTimestamp}.${fileType}`;

  switch (fileType) {
    case "csv": {
      // Convert the data to a CSV string
      const replacer = (key: string, value: any) =>
        value === null ? "" : value;
      const header = Object.keys(data[0]);
      const csvStr = data.map((row) =>
        header
          .map((fieldName) =>
            JSON.stringify((row as { [key: string]: any })[fieldName], replacer)
          )
          .join(",")
      );
      csvStr.unshift(header.join(","));
      const csvOutputData = csvStr.join("\r\n");
      download(csvOutputData, "text/csv", outputFileName);
      break;
    }

    case "json": {
      const jsonOutputData = JSON.stringify(data, null, 2);
      download(jsonOutputData, "application/json", outputFileName);
      break;
    }

    default:
      throw new Error(`exportData: ${fileType} is not a valid mime-type`)
  }
};

export default exportData;
