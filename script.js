var dragAndDrop = (function () {
    var selectedX = '';
    var selectedY = '';
    var selectedNumber = '';

    // Drag start //
    function startMove (e) {
        console.log('start move')
        selectedNumber = e.target;
        console.log(e.layerX + ', ' + e.layerY);
        console.dir(e.target);
        selectedX = e.offsetX === undefined ? e.layerX : e.offsetX;
        selectedY = e.offsetY === undefined ? e.layerY : e.offsetY;
        selectedNumber.style.zIndex = 11;
    }

    document.querySelector('body')
        .addEventListener('dragstart', startMove, false);

    // Drag over//
    function dragOver (e) {
        e.preventDefault();
        console.log('e')
    }
    document.querySelector('body')
        .addEventListener('dragover', dragOver, false);

    // Drop //
    function dropItem (e) {
        console.log('drop item')
        e.preventDefault();
        // Position element to latest updated location
        selectedNumber.style.left = ( e.pageX - selectedX ) + 'px';
        selectedNumber.style.top = (e.pageY - selectedY) + 'px';
        console.log(e.pageX + ' - ' + selectedX);
    }

    document.querySelector('body')
        .addEventListener('drop', dropItem, false);
})();