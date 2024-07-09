// 6.6. LinkedIn Profile URL Validator.

const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-_]{5,30}[a-zA-Z0-9]$/;

function validateLinkedInUrl(url) {
  if (linkedinRegex.test(url)) {
    console.log(`The URL "${url}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`The URL "${url}" is not a valid LinkedIn profile URL.`);
  }
}

// Test the function
validateLinkedInUrl("https://www.linkedin.com/in/john-doe"); 
// Should print "The URL "https://www.linkedin.com/in/john-doe" is a valid LinkedIn profile URL."
validateLinkedInUrl("https://www.linkedin.com/in/jane_smith123"); 
// Should print "The URL "https://www.linkedin.com/in/jane_smith123" is a valid LinkedIn profile URL."
validateLinkedInUrl("https://www.linkedin.com/in/invalid-url"); 
// Should print "The URL "https://www.linkedin.com/in/invalid-url" is not a valid LinkedIn profile URL."
validateLinkedInUrl("http://www.linkedin.com/in/john-doe"); 
// Should print "The URL "http://www.linkedin.com/in/john-doe" is not a valid LinkedIn profile URL."
validateLinkedInUrl("https://www.linkedin.com/in/"); 
// Should print "The URL "https://www.linkedin.com/in/" is not a valid LinkedIn profile URL."
validateLinkedInUrl("https://www.linkedin.com/in/a"); 
// Should print "The URL "https://www.linkedin.com/in/a" is not a valid LinkedIn profile URL."