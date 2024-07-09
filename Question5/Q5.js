// 5.URL validation.

const urlRegex = /^(https?:\/\/)[\w\-]+(\.[\w\-]+)+$/;

function validateUrl(url) {
  if (urlRegex.test(url)) {
    console.log(`The URL "${url}" is valid.`);
  } else {
    console.log(`The URL "${url}" is not valid.`);
  }
}

// Test the function
validateUrl("https://www.example.com"); // Should print "The URL "https://www.example.com" is valid."
validateUrl("http://example.co.uk"); // Should print "The URL "http://example.co.uk" is valid."
validateUrl("ftp://example.com"); // Should print "The URL "ftp://example.com" is not valid."
validateUrl("https://example"); // Should print "The URL "https://example" is not valid."