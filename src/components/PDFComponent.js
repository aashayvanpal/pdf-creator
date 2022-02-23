import React from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import imgData from '../images/image-exports'

const PDFComponent = () => {
    const pdfGenerate = () => {
        var doc = new jsPDF('protrait', 'px', 'a4', 'false')
        doc.setFillColor('#5dc3ca');
        doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');

        doc.rect(20, 20, doc.internal.pageSize.width - 40, doc.internal.pageSize.height - 40, 'S');
        doc.rect(25, 25, doc.internal.pageSize.width - 50, doc.internal.pageSize.height - 50, 'S');

        // User details
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(18);
        doc.text(45, 300, 'Hi ! Hope you enjoyed learning JSPDF ')
        doc.text(45, 330, 'Here is an example Table:')

        // Order table
        doc.autoTable({
            head: [['Company', 'Contact', 'Country']],
            theme: 'grid',
            // headStyles: { fillColor: [226, 189, 56] },
            styles: {
                fontSize: 20
            },
            startY: 350,
            body: [
                ['Alfreds Futterkiste', 'Maria Anders', 'Germany'],
                ['Centro comercial Moctezuma', 'Francisco Chang', 'Mexico'],
                ['Ernst Handel', 'Roland Mendel', 'Austria'],
                ['Island Trading', 'Helen Bennett', 'UK'],

            ],
        })

        doc.text(45, 550, 'Have a good day ahead!')

        doc.addImage(imgData, 'JPEG', 30, 30, 385, 200)
        doc.save('Thankyou.pdf')
    }

    return (
        <div>
            <h1>PDF generator Tutorial</h1><br />
            <button onClick={pdfGenerate}> Generate PDF </button>
        </div>
    )
}

export default PDFComponent