try{
    const modelViewer = document.querySelector('model-viewer');
    const progress = document.querySelector('#progress');
    const bar = progress.querySelector('.bar');

    modelViewer.addEventListener('progress', (event) => {
        const {totalProgress} = event.detail;
        progress.classList.toggle('show', totalProgress < 1);
        bar.style.transform = `scaleX(${totalProgress})`;
    });
} catch (e) {

}