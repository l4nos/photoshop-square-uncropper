#target photoshop

// Function to trim the image based on transparent pixels
function trimTransparentPixels() {
    var doc = app.activeDocument;
    doc.trim(TrimType.TRANSPARENT, false, true, true, true); // Trims based on transparent pixels
}

// Function to make the canvas square and resize to user-defined size
function makeSquareAndResize(squareSize) {
    var doc = app.activeDocument;

    // Get the current width and height
    var width = doc.width.as('px');
    var height = doc.height.as('px');

    // Determine the larger dimension
    var maxDimension = Math.max(width, height);

    // Set the anchor to the bottom center and extend the canvas
    doc.resizeCanvas(maxDimension, maxDimension, AnchorPosition.BOTTOMCENTER);

    // Resize the image to the user-defined size
    doc.resizeImage(squareSize, squareSize);
}

// Function to save PNG for web
function savePNGForWeb(outputPath) {
    var saveOptions = new ExportOptionsSaveForWeb();
    saveOptions.format = SaveDocumentType.PNG;
    saveOptions.PNG8 = false; // False for PNG-24, true for PNG-8
    saveOptions.transparency = true;
    saveOptions.interlaced = false;
    saveOptions.optimized = true;

    // Save the file
    app.activeDocument.exportDocument(new File(outputPath), ExportType.SAVEFORWEB, saveOptions);
}

// Function to save JPEG for web with adjustable quality
function saveJPEGForWeb(outputPath, quality) {
    var saveOptions = new ExportOptionsSaveForWeb();
    saveOptions.format = SaveDocumentType.JPEG;
    saveOptions.quality = quality;
    saveOptions.optimized = true;

    // Save the file
    app.activeDocument.exportDocument(new File(outputPath), ExportType.SAVEFORWEB, saveOptions);
}

// Function to save TIFF
function saveTIFF(outputPath) {
    var saveOptions = new TiffSaveOptions();
    saveOptions.imageCompression = TIFFEncoding.NONE; // No compression, can be adjusted if needed
    saveOptions.layers = false;

    // Save the file
    app.activeDocument.saveAs(new File(outputPath), saveOptions, true);
}

// Prompt user for square size
var squareSize = parseInt(prompt("Enter the desired square size (default is 1024):", "1024"), 10);
if (isNaN(squareSize) || squareSize <= 0) {
    squareSize = 1024; // Default value if input is invalid
}

// Open all files in the folder
var inputFolder = Folder.selectDialog("Select the folder containing images to process");
if (inputFolder != null) {
    var files = inputFolder.getFiles(/\.(jpg|jpeg|png|tif|tiff)$/i);

    // Adjustable JPEG quality variable
    var jpegQuality = 85; // Adjust this value as needed

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (file instanceof File) {
            app.open(file);
            trimTransparentPixels(); // Trim the transparent pixels before resizing
            makeSquareAndResize(squareSize);

            // Get the file name and create the output path
            var fileName = file.name;
            var extension = fileName.split('.').pop().toLowerCase();
            var outputPath = inputFolder + "/square_" + fileName;

            if (extension === 'jpg' || extension === 'jpeg') {
                // Save the image as optimized JPEG for web
                saveJPEGForWeb(outputPath, jpegQuality);
            } else if (extension === 'png') {
                // Save the image as optimized PNG for web
                savePNGForWeb(outputPath);
            } else if (extension === 'tif' || extension === 'tiff') {
                // Save the image as TIFF
                saveTIFF(outputPath);
            }

            // Close the document without saving changes
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
    }
}