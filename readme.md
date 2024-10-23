# Photoshop Image Resizer Script

## Hey there, fellow Photoshop warriors!

Welcome to the solution to one of the most annoying problems in batch image editing—making all those pesky, differently-sized images look uniform without losing your sanity. If you’ve ever thought to yourself, "I just want all these images to be square! Why is that so hard?!" then this script is here to save your day (or at least save you from a caffeine-induced meltdown).

This little script will take your scattered mess of images and turn them into beautiful, square, web-optimized masterpieces, ready to go with minimal effort on your part. Let's dive in!

## What It Does

- **Canvas Wizardry**: Expands the canvas of your image to make it a perfect square—anchoring the content to the bottom center, so those key parts of your image stay put. No more guessing how to crop while keeping the focus intact.
- **Resizing Superpower**: Squishes (or stretches) everything to a size of your choosing—by default, it's 1024x1024, but you get to call the shots here. The script will even politely ask you for the size you want when you start it.
- **Handles Multiple Formats**: PNG? JPEG? TIFF? No problem. It takes them all in, processes them, and spits them out just the way you want.
- **Optimized for Web**: When saving PNGs and JPEGs, this script applies some clever optimizations so your images load fast and look sharp online.

## Step-by-Step Instructions

1. **Fire Up Photoshop**
    - Open Photoshop because this script is designed to work right inside the belly of the beast.

2. **Run the Script**
    - Load it up by going to `File > Scripts > Browse`, then pick this `.jsx` script file.

3. **Set the Size (Your Choice!)**
    - It’s going to ask you for the square size. Just enter what you need (the default is 1024 pixels). Don't worry, the script is very forgiving if you change your mind.

4. **Pick Your Victims—I Mean Images**
    - You’ll get prompted to select a folder containing your images. Drop in whatever you’ve got—JPEG, PNG, TIFF—the script won’t discriminate.

5. **Sit Back and Relax**
    - The script will iterate through each image, fix that canvas, and resize it to perfection. It’s like having a magical assistant without the hefty salary.

6. **Check Out the Output**
    - All your processed images will be saved in the same folder as the originals, with `_square_` added to the filenames. No originals are harmed in the making of these new squares.

## Cool Features

### Canvas Expansion That Actually Makes Sense
The script doesn’t just randomly add space. It calculates which dimension is smaller and adds just the right amount of space to make it square, while keeping the focus at the **bottom center**. If you’re resizing product shots or portraits, this makes sure the important stuff doesn’t go wandering off to the edge.

### Customizable Output Size
You're the boss here. Whether you want 500x500 or 2048x2048, just type in the size when the prompt asks. No extra coding needed—just give it a number, and you’re set.

### Quality Control for JPEG
JPEGs get a quality level variable you can tweak, currently set to **85**. It’s that sweet spot between “Oh wow, this looks great!” and “Hey, why is this file 10MB?!” Adjust it as you see fit:

```javascript
var jpegQuality = 85; // Go higher or lower as you need
```

### Formats Galore
- **PNG**: Saved as **PNG-24** for best quality, with transparency intact, so your icons and graphics stay sharp.
- **JPEG**: Adjustable quality. This will save your space without sacrificing too much quality.
- **TIFF**: Not left out. It gets saved with no compression by default.

## Important Notes

- **Backup Your Stuff**: This script makes new files, but hey, accidents happen. Keep backups just in case.
- **Patience is a Virtue**: Depending on how many massive images you have, this might take a minute (or several). Photoshop isn’t a speed demon when it comes to batch tasks, so feel free to grab a coffee while it does the work.
- **Photoshop Versions**: This script should work on most modern versions of Photoshop. If it doesn’t, it might be time to update—trust me, you’ll be glad you did.

## Got Ideas or Want to Make It Better?
Feel free to fork and tweak the script. It’s written by a fellow developer who’s felt the pain of clicking "resize" one too many times. Want to add some filters, add more formats, or make the whole thing dance? Go for it! This script is yours to make magic with.

## About the Creator
This script was made for those of us out there who just want our images to behave. No more manual resizing, no more eyeballing canvas sizes—just clean, automated processing. I made this to help my fellow devs and creatives get back to what they actually enjoy doing.

Happy scripting and happy creating! 🎨✨

