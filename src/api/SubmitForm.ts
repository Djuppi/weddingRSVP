async function submitForm(formData: FormData): Promise<void> {
  try {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxeLNFIQRmWalCBSi8IT0cMEP9VLCEcxz1GMc5--18z3GDkzOi7awmJPPSZUzl5zo2i/exec";

    const values = Object.values(formData);

    const requestBody = {
      values: [values],
    };

    await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: 'no-cors',
    });

    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

export default submitForm;
