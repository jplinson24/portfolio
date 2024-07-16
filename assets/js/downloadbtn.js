document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeUrl = 'assets/pdf/LINSON_JOHN_PATRICK_CV.pdf';  // Replace with your resume URL
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'LINSON_JOHN_PATRICK_CV.pdf';  // The name you want the downloaded file to have
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
