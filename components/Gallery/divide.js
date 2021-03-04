const divide = images => {
    let dividedImage = [[],[],[]];

    for (let i = 0; i < images.length; i++) {
        dividedImage[i%3].push(images[i]);
    }

    return dividedImage
}

export default divide