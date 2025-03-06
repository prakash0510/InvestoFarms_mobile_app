import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
  standalone:false
})
export class UserDashboardComponent {

  downloadPDF(): void {
    const pdfUrl: string = "assets/constants/SamplePdf.pdf"; // Adjust path as needed
    const link: HTMLAnchorElement = document.createElement("a");

    link.href = pdfUrl;
    link.download = "MyPDF.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

openDownloadedPDF(): void {
  const pdfUrl: string = "assets/constants/SamplePdf.pdf"; // Adjust the path if needed
  window.open(pdfUrl, "_blank"); // Opens in a new tab
}
}
