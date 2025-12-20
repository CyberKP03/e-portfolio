export const downloadResume = async (apiUrl, fileName, fileExtension) => {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) return alert("Download failed");

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.${fileExtension}`;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (err) {
    console.error(err);
    alert("Failed to download");
  }
};
