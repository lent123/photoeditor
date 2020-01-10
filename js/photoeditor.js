var photoEditor = {
    element: ' <div class="pe-main"><div class="divClose" style="text-align:right"><span id="btnClose" style="color:white;padding:8px;font-size:30px;" class="fa fa-window-close"></span></div><div id="pe-img-edit" class="table pe-img-edit" ><div class="tableCell box" id="pe-container"><canvas id="pe-panel"></canvas><label id="pe-uploadImg" style="text-align: center"><p style="color:white; font-size: 36px;">Click to upload image</p><input type="file" class="sr-only" id="pe-input" name="image" accept="image/*"></label><label id="pe-choeseImg" style="text-align: center"></label></div></div><div class="table"><div class="pe-toolbar"><div class="pe-toolbar_button" id="pe-renderBtn" name="Render"><span class="fa fa-save pe-tooltip"></span><span class="pe-tooltiptext">Save</span></div><div class="pe-toolbar_button" id="pe-downloadBtn" name="Download"><span class="fa fa-download pe-tooltip"></span><span class="pe-tooltiptext">Download</span></div><div class="pe-toolbar_button" id="pe-dragBttn" name="Drag"><span class="fa fa-arrows pe-tooltip"></span><span class="pe-tooltiptext">Drag</span></div><div class="pe-toolbar_button" id="pe-resizeBttn" name="Resize"><span class="fa fa-expand pe-tooltip"></span><span class="pe-tooltiptext">Resize</span></div><div class="pe-sizearea" id="pe-widthInput" style="display: none;"><span>Width</span><input type="text" id="pe-widthValue" style="width: 30px"></div><div class="pe-sizearea" id="pe-heightInput" style="display: none;"><span>Height</span><input type="text" id="pe-heightValue" style="width: 30px"></div><div class="pe-toolbar_button" id="pe-cropBttn" name="Crop"><span class="fa fa-crop pe-tooltip"></span><span class="pe-tooltiptext">Crop</span></div><div class="pe-toolbar_button" id="pe-zoominBttn" name="ZoomIn"><span class="fa fa-search-minus pe-tooltip"></span><span class="pe-tooltiptext">ZoomIn</span></div><div class="pe-toolbar_button" id="pe-zoomoutBttn" name="Zoomout"><span class="fa fa-search-plus pe-tooltip"></span><span class="pe-tooltiptext">ZoomOut</span></div><div class="pe-toolbar_button" id="pe-cutdown" style="display: none" name="Cutdown"><span class="fa fa-expand pe-tooltip"></span><span class="pe-tooltiptext">Cutdown</span></div><div class="pe-toolbar_button" id="pe-cut-square" style="display: none" name="Square"><span class="fa fa-square-o pe-tooltip"></span><span class="pe-tooltiptext">Square</span></div><div class="pe-toolbar_button" id="pe-ratio-4-3" style="display: none" name="Ratio 4:3"><span class="fa pe-tooltip">4:3</span><span class="pe-tooltiptext">Ratio 4:3</span></div><div class="pe-toolbar_button" id="pe-ratio-16-9" style="display: none" name="Ratio 19:9"><span class="fa pe-tooltip">16:9</span><span class="pe-tooltiptext">Ratio 16:9</span></div><div class="pe-toolbar_button" id="pe-orientateBttn" name="Zoomout"><span class="fa fa-refresh pe-tooltip"></span><span class="pe-tooltiptext">Orientation</span></div><div class="pe-toolbar_button" id="pe-rotateLeft" style="display: none" name="Rotate Counterclockwise"><span class="fa fa-rotate-left pe-tooltip"></span><span class="pe-tooltiptext">Rotate Counterclockwise</span></div><div class="pe-toolbar_button" id="pe-rotateRight" style="display: none" name="Rotate Clockwise"><span class="fa fa-rotate-right pe-tooltip"></span><span class="pe-tooltiptext">Rotate Clockwise</span></div><div class="pe-toolbar_button" id="pe-vertical" style="display: none"><span class="fa fa-arrows-h pe-tooltip"></span><span class="pe-tooltiptext">Vertical</span></div><div class="pe-toolbar_button" id="pe-horizontal" style="display: none"><span class="fa fa-arrows-v pe-tooltip"></span><span class="pe-tooltiptext">Horizontal</span></div><div class="pe-toolbar_button" id="pe-contrast" name="Contrast"><span class="fa fa-adjust pe-tooltip"></span><span class="pe-tooltiptext">Contrast</span></div><div class="pe-toolbar_button" id="pe-brightness" name="Brightness"><span class="fa fa-sun-o pe-tooltip"></span><span class="pe-tooltiptext">Brighness</span></div><div class="pe-toolbar_button" id="pe-blur" name="Blur"><span class="fa fa-filter pe-tooltip"></span><span class="pe-tooltiptext">Blur</span></div><div class="pe-toolbar_button" id="pe-grayscale" name="Grayscale"><span class="fa fa-snowflake-o pe-tooltip"></span><span class="pe-tooltiptext">Grayscale</span></div><div class="pe-toolbar_button" id="pe-saturate" name="Saturate"><span class="fa fa-diamond pe-tooltip"></span><span class="pe-tooltiptext">Saturate</span></div><div class="pe-toolbar_button" id="pe-filter" name="Saturate"><span class="fa fa-cogs pe-tooltip"></span><span class="pe-tooltiptext">Filter</span></div><div class="pe-toolbar_button" id="pe-undoBttn" name="Undo"><span class="fa fa-mail-reply pe-tooltip"></span><span class="pe-tooltiptext">Undo</span></div><div class="pe-toolbar_button " id="pe-redoBttn" name="Redo"><span class="fa fa-mail-forward pe-tooltip"></span><span class="pe-tooltiptext">Redo</span></div><div class="pe-slidecontainer pe-sizearea" style="display: none" id="pe-slideBar"><input type="range" min="0" max="200" value="100" class="pe-slider" id="pe-rangeBar"><span id="pe-filterValue"></span></div><div id="pe-filterArea" style="display: none"><figure class="pe-brannan pe-tooltip"><img id="pe-brannan" class="pe-img"><span class="pe-tooltiptext">brannan</span></figure><figure class="pe-aden pe-tooltip"><img id="pe-aden" class="pe-img"><span class="pe-tooltiptext">Aden</span></figure><figure class="pe-clarendon pe-tooltip"><img id="pe-clarendon" class="pe-img"><span class="pe-tooltiptext">Clarendon</span></figure><figure class="pe-lofi pe-tooltip" id="style1"><img id="pe-lofi" class="pe-img"><span class="pe-tooltiptext"> Lofi</span></figure><figure class="pe-amaro pe-tooltip"><img id="pe-amaro" class="pe-img"><span class="pe-tooltiptext">Amaro</span></figure><figure class="pe-walden pe-tooltip"><img id="pe-walden" class="pe-img"><span class="pe-tooltiptext">Walden</span></figure><figure class="pe-maven pe-tooltip"><img id="pe-maven" class="pe-img"><span class="pe-tooltiptext">Maven</span></figure><figure class="pe-brooklyn pe-tooltip"><img id="pe-brooklyn" class="pe-img"><span class="pe-tooltiptext">Brooklyn</span></figure><figure class="pe-xpro2 pe-tooltip"><img id="pe-xpro2" class="pe-img"><span class="pe-tooltiptext">Xpro2</span></figure><figure class="pe-toaster pe-tooltip"><img id="pe-toaster" class="pe-img"><span class="pe-tooltiptext">Toaster</span></figure><figure class="pe-stinson pe-tooltip"><img id="pe-stinson" class="pe-img"><span class="pe-tooltiptext">Stinson</span></figure><figure class="pe-inkwell pe-tooltip"><img id="pe-inkwell" class="pe-img"><span class="pe-tooltiptext">Inkwell</span></figure></div><button class="pe-toolbar_button" id="pe-doneBttn" name="Apply" style="display:none;"><span class="fa fa-check"></span></button><button class="pe-toolbar_button" id="pe-cancelBttn" name="Cancel" style="display: none;"><span class="fa fa-close"></span></button></div></div></div>',
    elementCrop: '<div id="elem" class="resizable"><div class="resizers" id="resizers"><div class="resizer top-left"></div><div class="resizer bottom-right"></div></div><div id="div-move"></div></div>',
    ctx: null,
    image: null,
    click: false,
    downPointX: 0,
    downPointY: 0,
    lastPointX: 0,
    lastPointY: 0,
    resize: false,
    canvasBackgroundColor: "#FFFFFF",
    img_arr: [],
    filter: null,
    stack_position: 0,
    active : false,
    currentX : 0,
    currentY : 0,
    initialX : null,
    initialY : null,
    xOffset : 0,
    yOffset : 0,
    dragItem : null,
    container : null,
    formatImage : null,
    urlImg : null,
    nameTag : null,
    tmpCheckEventCanvas : false,
    tmp_param : null,
    uploadFromPC : false,
    checkCrop: false,
    scaleSquare: 1,
    scale43: 4/3,
    scale169: 16/9,

    /**
     * Initlize canvas and handle button event
     *
     */
    init: function(param, photoeditor_box) {
        this.tmp_param = param;
        this.nameTag = this.tmp_param.nodeName;
        this.urlImg = this.tmp_param.getAttribute('src');

        photoeditor_box.insertAdjacentHTML("afterbegin", this.element);

        var tmp = this;
        var el = document.getElementsByClassName('pe-toolbar_button');
        this.img_arr = [];
        this.stack_position = 0;

        for (var i = 0; i < el.length; i++) {
            el[i].style.pointerEvents = 'none';
        }

        this.dragItem = document.getElementById("pe-panel");
        this.container = document.getElementById("pe-container");
        this.ctx = document.getElementById("pe-panel").getContext("2d");
        this.initCanvas(this.urlImg, this.nameTag);

        //value of filter
        this.filter = {
            'pe-toaster' : 'contrast(150%) brightness(90%)',
            'pe-amaro' : 'contrast(90%) brightness(110%) saturate(150%) hue-rotate(-10deg)',
            'pe-brooklyn' : 'contrast(90%) brightness(110%)',
            'pe-clarendon' : 'contrast(120%) saturate(125%)',
            'pe-inkwell' : 'contrast(110%) brightness(110%) sepia(30%) grayscale(100%)',
            'pe-aden' : 'contrast(90%) brightness(120%) saturate(85%) hue-rotate(20deg)',
            'pe-stinson' : 'contrast(75%) brightness(115%) saturate(85%)',
            'pe-walden' : 'brightness(110%) saturate(160%) sepia(30%) hue-rotate(350deg)',
            'pe-xpro2' : 'sepia(30%)',
            'pe-maven' : 'contrast(95%) brightness(95%) saturate(150%) sepia(25%)',
            'pe-brannan' : 'contrast(140%) sepia(50%)',
            'pe-lofi' : 'contrast(150%) saturate(110%)'
        };

        //buttons event
        document.getElementById("pe-resizeBttn").onclick = this.changeImageSize.bind(this);
        document.getElementById("pe-contrast").onclick = this.changeImageFilter.bind(this, 'pe-contrast');
        document.getElementById("pe-brightness").onclick = this.changeImageFilter.bind(this, 'pe-brightness');
        document.getElementById("pe-grayscale").onclick = this.changeImageFilter.bind(this, 'pe-grayscale');
        document.getElementById("pe-blur").onclick = this.changeImageFilter.bind(this, 'pe-blur');
        document.getElementById("pe-saturate").onclick = this.changeImageFilter.bind(this, 'pe-saturate');
        document.getElementById("pe-cancelBttn").onclick = this.cancelEditImage.bind(this);
        document.getElementById("pe-orientateBttn").onclick = this.orientateImage.bind(this);
        document.getElementById('pe-zoominBttn').onclick = this.zoom.bind(this, 0.9);
        document.getElementById('pe-zoomoutBttn').onclick = this.zoom.bind(this, 1.1);
        document.getElementById('pe-undoBttn').onclick = this.undo.bind(this);
        document.getElementById('pe-redoBttn').onclick = this.redo.bind(this);

        document.getElementById("btnClose").addEventListener('click', function(){
            if (confirm("Are you sure exit ?")) {
                photoeditor_box.remove();
            }
        });

        document.getElementById("pe-renderBtn").addEventListener('click', function () {
            document.getElementsByClassName('pe-main')[0].style.display = 'none';
            tmp.ctx = document.getElementById("pe-panel").getContext("2d");
            tmp.image.src = tmp.ctx.canvas.toDataURL();
            tmp.render(tmp.image.src, photoeditor_box);
        });

        document.getElementById("pe-downloadBtn").addEventListener('click', function() {
            tmp.ctx = document.getElementById("pe-panel").getContext("2d");

            tmp.image.src = tmp.ctx.canvas.toDataURL('image/png');
            if (formatImage != 'png') {
                tmp.image.src = tmp.ctx.canvas.toDataURL('image/jpeg');
            }

            var link = document.createElement('a');
            link.download = 'image.' + formatImage;
            link.href = tmp.image.src;
            link.click();
            link.remove();
        });
        document.getElementById('pe-dragBttn').onclick = function(e) {
            tmp.ctx = document.getElementById("pe-panel").getContext("2d");
            tmp.image.src = tmp.ctx.canvas.toDataURL();

            var container = document.querySelector("#pe-container");
            //mouse's mobile event
            container.addEventListener("touchstart", tmp.dragStart.bind(tmp), false);
            container.addEventListener("touchend", tmp.dragEnd.bind(tmp), false);
            container.addEventListener("touchmove", tmp.drag.bind(tmp), false);
            //mouse's mobile pc
            container.addEventListener("mousedown", tmp.dragStart.bind(tmp), false);
            container.addEventListener("mouseup", tmp.dragEnd.bind(tmp), false);
            container.addEventListener("mousemove", tmp.drag.bind(tmp), false);
        };

        document.getElementById("pe-filter").onclick = this.chooseFilter.bind(this);
        document.getElementById("pe-cropBttn").addEventListener('click', function() {
            tmp.ctx = document.getElementById("pe-panel").getContext("2d");
            tmp.image.src = tmp.ctx.canvas.toDataURL();
           
            tmp.openEditToolBar();
            document.getElementById('pe-cutdown').style.display = 'inline-block';
            document.getElementById('pe-cut-square').style.display = 'inline-block';
            document.getElementById('pe-ratio-4-3').style.display = 'inline-block';
            document.getElementById('pe-ratio-16-9').style.display = 'inline-block';

            document.getElementById("pe-doneBttn").onclick = tmp.cropImage.bind(tmp);
             if (tmp.uploadFromPC == true) {
                setTimeout(function() {
                    tmp.img_arr.pop();
                }, 1000);
            }
        });

        document.getElementById("pe-cutdown").addEventListener('click', tmp.initCrop.bind(this, tmp, null));
        document.getElementById("pe-cut-square").addEventListener('click', tmp.initCrop.bind(this, tmp, tmp.scaleSquare));
        document.getElementById("pe-ratio-4-3").addEventListener('click', tmp.initCrop.bind(this, tmp, tmp.scale43));
        document.getElementById("pe-ratio-16-9").addEventListener('click', tmp.initCrop.bind(this, tmp, tmp.scale169));
    },

    /**
     * Initlize area to crop by scale
     *
     */     
    initCrop: function (tmp, ratio) {
        tmp.checkCrop = true;
        if (document.getElementById('parent') != null) {
            document.getElementById('parent').remove();
        }
        canvas_tmp = document.getElementById('pe-panel');
        pe_container = document.getElementById("pe-container");
        const width_canvas = canvas_tmp.width;
        const height_canvas = canvas_tmp.height;
        var width_div_resizable = 0;
        var height_div_resizable = 0;

        var parent = document.createElement('div');
        parent.style.width = width_canvas + 'px';
        parent.style.height = height_canvas + 'px';
        parent.style.top = (canvas_tmp.offsetTop - 2 - height_canvas/2) + 'px';
        parent.style.left = (canvas_tmp.offsetLeft - 1 - width_canvas/2) + 'px';
        parent.setAttribute('id', 'parent');
        pe_container.appendChild(parent);

        parent.innerHTML = tmp.elementCrop;
        var div_resizable = document.getElementById('elem');
        if (ratio !== null) {
            if (width_canvas <= height_canvas ) {
                width_div_resizable = width_canvas - 3 + 'px';
                height_div_resizable = width_canvas / ratio - 3 + 'px';
            } else {
                width_div_resizable = height_canvas - 3 + 'px';
                height_div_resizable = height_canvas / ratio - 3 + 'px';
            }
        } else {
            width_div_resizable = width_canvas - 3 + 'px';
            height_div_resizable = height_canvas - 3  + 'px';
        }
        div_resizable.style.width = width_div_resizable;
        div_resizable.style.height = height_div_resizable;

        this.makeResizableDiv('.resizable', tmp, ratio);
        this.dragElement(div_resizable, tmp);
    },

    /**
     * get uploaded image and draw canvas
     *
     */
    initCanvas: function(urlImg, nameTag) {
        var tmp = this;
        this.image = new Image();
        this.image.setAttribute('crossOrigin', 'anonymous');
        if(nameTag == 'IMG') {
            this.image.src = urlImg;
            formatImage = urlImg.split('.').splice(-1)[0];

            format = ['png', 'jpg', 'jpeg', 'gif'];
            if(!format.includes(formatImage)){
                formatImage = 'png';
            }
        }

        var st1 = '1st';
        var widthImageBefore = this.tmp_param.width;
        var heightImageBefore = this.tmp_param.height;
        var widthDivEdit = document.getElementById('pe-container').offsetWidth*0.8;
        var heightDivEdit = document.getElementById('pe-container').offsetHeight*0.9;

        if (st1 == '1st' && (widthImageBefore >= widthDivEdit) || (heightImageBefore >= heightDivEdit)) {
            imageTMP = new Image();
            imageTMP.setAttribute('crossOrigin', 'anonymous');
            imageTMP.src = urlImg;

            var newSizeImg = this.newSizeImg(widthImageBefore, heightImageBefore, widthDivEdit, heightDivEdit);
            widthImage = newSizeImg.widthImage;
            heightImage = newSizeImg.heightImage;

            imageTMP.onload = function() {
                this.height = heightImage;
                this.width = widthImage;
                tmp.ctx.canvas.width = this.width;
                tmp.ctx.canvas.height = this.height;
                tmp.ctx.drawImage(this, 0, 0, widthImage, heightImage);

                tmp.refreshBtn();
                tmp.pushImage(tmp);
            }
            st1 == '2st';
        } else {
            this.image = new Image();
            this.image.setAttribute('crossOrigin', 'anonymous'); //optional,  it is needed only if your image is not avalible on same domain.
            this.image.src = urlImg;

            document.getElementById('pe-input').addEventListener('change', function (e) {
                var files = e.target.files;
                tmp.uploadFromPC = true;
                if (files && files.length > 0) {
                    var reader = new FileReader();
                    formatImage = files['0'].name.split('.')[1];
                    reader.onload = function (e) {
                        imageTMP = new Image();
                        imageTMP.src = reader.result;
                        imageTMP.onload = function () {
                            var newSizeImg = tmp.newSizeImg(this.width, this.height, widthDivEdit, heightDivEdit);
                            this.width = newSizeImg.widthImage;
                            this.height = newSizeImg.heightImage;

                            tmp.ctx.canvas.width = this.width;
                            tmp.ctx.canvas.height = this.height;
                            tmp.ctx.drawImage(this, 0, 0, this.width, this.height);

                            tmp.refreshBtn();
                            tmp.pushImage(tmp);
                        }
                    };
                    reader.readAsDataURL(files[0]);
                }
            });

            this.image.onload = function() {
                tmp.uploadFromPC = true;
                this.ctx.canvas.width = this.image.width;
                this.ctx.canvas.height = this.image.height;
                this.ctx.drawImage(this.image, 0, 0);

                this.refreshBtn();
                this.pushImage(this);
            }.bind(this);
        }
    },

    /**
     * resize image to show full image
     * @param widthImageBefore: width image before
     * @param heightImageBefore: height image before
     * @param widthDivEdit: width of area show image to editer
     * @param heightDivEdit: height of area show image to editer
     * @return: widthImage is new width Image
     *         heightImage is new height Image
     */
    newSizeImg: function(widthImageBefore, heightImageBefore, widthDivEdit, heightDivEdit) {
        if (heightImageBefore >= heightDivEdit && heightImageBefore >= widthImageBefore) {
            tileHeight = heightImageBefore / heightDivEdit;
            heightImage = heightDivEdit;
            widthImage = widthImageBefore / tileHeight;
        } else {
            tileWidth = widthImageBefore / widthDivEdit;
            widthImage = widthDivEdit;
            heightImage = heightImageBefore / tileWidth;
        }
        return {
            "widthImage": widthImage,
            "heightImage": heightImage
        };
    },

    /**
     * display none all button
     *
     */
    refreshBtn: function() {
        var el = document.getElementsByClassName('pe-toolbar_button');
        for (var i = 0; i < el.length; i++) {
            el[i].style.pointerEvents = '';
        }

        document.getElementById('pe-uploadImg').style.display = 'none';
    },

    /**
     *  push image to array
     *
     */
    pushImage: function(tmp) {
        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        var newImg = new Image();
        newImg.src = tempCtx.canvas.toDataURL();

        var imgValue = {
            img: newImg,
            width: tempCtx.canvas.width,
            height: tempCtx.canvas.height
        }
        tmp.img_arr.push(imgValue);
    },

    /**
     * open edit icon and hide toolbar
     *
     */
    openEditToolBar: function() {
        var el = document.getElementsByClassName('pe-toolbar_button');

        for (var i = 0; i < el.length; i++) {
            el[i].style.display = 'none';
        }
        document.getElementById('pe-doneBttn').style.display = 'inline-block';
        document.getElementById('pe-cancelBttn').style.display = 'inline-block';
    },

    /**
     * hide edit icon and show toolbar
     *
     */
    closeEditToolBar: function() {
        var el = document.getElementsByClassName('pe-toolbar_button');

        for (var i = 0; i < el.length; i++) {
            el[i].style.display = 'inline-block';
        }

        var el1 = document.getElementsByTagName('figure');

        for (var i = 0; i < el1.length; i++) {
            el1[i].style.display = 'none';
        }

        this.hideBnt();
    },

    /**
     * redraw canvas when click cancel edit button
     *
     */
    cancelEditImage: function() {
        this.checkCrop = false;
        var pos = this.stack_position;
        var image = this.img_arr[pos];
        document.getElementById("pe-panel").remove();
        var data = "<canvas id='pe-panel'></canvas>";
        document.getElementById('pe-container').innerHTML += data;
        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);

        tempCtx.canvas.width = image.width;
        tempCtx.canvas.height = image.height;

        this.stack_position = pos;
        tempCtx.drawImage(image.img, 0, 0, image.width, image.height);

        var el = document.getElementsByClassName('pe-toolbar_button');

        for (var i = 0; i < el.length; i++) {
            el[i].style.display = 'inline-block';
        }

        var el1 = document.getElementsByTagName('figure');

        for (var i = 0; i < el1.length; i++) {
            el1[i].style.display = 'none';
        }

        this.hideBnt();
        if(document.getElementById('parent') != null) {
            document.getElementById('parent').remove();
        }
    },

    /**
     * display none all button
     *
     */
    hideBnt: function() {
        document.getElementById('pe-doneBttn').style.display = 'none';
        document.getElementById('pe-cancelBttn').style.display = 'none';
        document.getElementById('pe-widthInput').style.display = 'none';
        document.getElementById('pe-heightInput').style.display = 'none';
        document.getElementById('pe-slideBar').style.display = 'none';
        document.getElementById('pe-vertical').style.display = 'none';
        document.getElementById('pe-horizontal').style.display = 'none';
        document.getElementById('pe-rotateLeft').style.display = 'none';
        document.getElementById('pe-rotateRight').style.display = 'none';
        document.getElementById('pe-cutdown').style.display = 'none';
        document.getElementById('pe-cut-square').style.display = 'none';
        document.getElementById('pe-ratio-4-3').style.display = 'none';
        document.getElementById('pe-ratio-16-9').style.display = 'none';
    },

    /**
     * Handle choosing filter event
     *
     */
    chooseFilter: function() {
        this.openEditToolBar();
        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        var el = document.getElementsByClassName('pe-img');
        var src = tempCtx.canvas.toDataURL();

        imageData = tempCtx.canvas.toDataURL();
        for (var i = 0; i < el.length; i++) {
            el[i].src = imageData;
            el[i].parentElement.style.display = 'inline-block';
        }

        document.getElementById('pe-filterArea').style.display = '';
        document.getElementById("pe-toaster").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName':'pe-toaster'});
        document.getElementById("pe-aden").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-aden'});
        document.getElementById("pe-amaro").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-amaro'});
        document.getElementById("pe-brooklyn").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-brooklyn'});
        document.getElementById("pe-clarendon").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-clarendon'});
        document.getElementById("pe-inkwell").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-inkwell'});
        document.getElementById("pe-lofi").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-lofi'});
        document.getElementById("pe-stinson").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-stinson'});
        document.getElementById("pe-walden").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-walden'});
        document.getElementById("pe-xpro2").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-xpro2'});
        document.getElementById("pe-brannan").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-brannan'});
        document.getElementById("pe-maven").onclick = this.applyFilter.bind(this, {'filterSample' : true, 'src' : src, 'filterName': 'pe-maven'});
        document.getElementById("pe-doneBttn").onclick = this.apply.bind(this);
    },

    /**
     * get location of mouse when start draw crop box
     *
     */
    dragStart: function(e) {
        if (e.type === "touchstart") {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
        }

        if (e.target === this.dragItem) {
            this.active = true;
        }
    },

    /**
     * get location of mouse after draw crop box
     *
     */
    dragEnd: function(e) {
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.active = false;
    },

    /**
     * get location when mouse moving and set transform for dragItem
     *
     */
    drag: function(e) {
        if (this.active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                this.currentX = e.touches[0].clientX - this.initialX;
                this.currentY = e.touches[0].clientY - this.initialY;
            } else {
                this.currentX = e.clientX - this.initialX;
                this.currentY = e.clientY - this.initialY;
            }

            this.xOffset = this.currentX;
            this.yOffset = this.currentY;
            this.setTranslate(this.currentX, this.currentY, document.getElementById("pe-panel"));
        }
    },

    setTranslate: function(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    },

    clearCanvas: function() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = this.canvasBackgroundColor;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    },

    /**
     * Draw image on canvas.
     */
    drawImage: function() {
        this.ctx.drawImage(this.image, 0, 0);
    },

    /**
     * Get the canavs, remove cutout, create image elemnet on UI.
     * @return {[type]}
     */
    cropImage: function() {
        if(this.checkCrop == true) {
            document.getElementById("pe-panel").remove();
            var data = "<canvas id='pe-panel'></canvas>";
            document.getElementById('pe-container').innerHTML += data;
            var tempCtx = document.getElementById('pe-panel').getContext('2d');
            tempCtx.clearRect(0, 0, tempCtx.canvas.style.width, tempCtx.canvas.style.height);

            tempCtx.canvas.width = this.lastPointX - this.downPointX;
            tempCtx.canvas.height = this.lastPointY - this.downPointY;
            tempCtx.drawImage(this.image, this.downPointX, this.downPointY,
                (this.lastPointX - this.downPointX),
                (this.lastPointY - this.downPointY),
                0, 0,
                (this.lastPointX - this.downPointX),
                (this.lastPointY - this.downPointY));

            imageData = document.getElementById('pe-panel').getContext('2d').canvas.toDataURL();
            var width = document.getElementById('pe-panel').width;
            var height = document.getElementById('pe-panel').height;
            var image = new Image();
            image.src = imageData;

            var tmp = {
                img: image,
                width: width,
                height: height
            }

            this.img_arr.splice(this.stack_position + 1, 0, tmp);
            this.stack_position++;
            this.checkCrop = false;
        }

        this.closeEditToolBar();
        if (document.getElementById('parent') != null) {
            document.getElementById('parent').remove();
        }
        this.tmpCheckEventCanvas = false;
    },

    /**
     * open resize tool bar and change value of width or height when use type number
     *
     */
    changeImageSize: function() {
        this.openEditToolBar();
        document.getElementById('pe-resizeBttn').style.display = 'inline-block';
        document.getElementById('pe-widthInput').style.display = 'inline-block';
        document.getElementById('pe-heightInput').style.display = 'inline-block';

        var tmp = document.getElementById('pe-panel').getContext('2d');

        document.getElementById('pe-widthValue').value = tmp.canvas.width;
        document.getElementById('pe-heightValue').value = tmp.canvas.height;

        document.getElementById('pe-widthValue').addEventListener('keyup', function () {
            var ratio = this.value/tmp.canvas.width;
            document.getElementById('pe-heightValue').value = Math.round(tmp.canvas.height * ratio);
        });

        document.getElementById('pe-heightValue').addEventListener('keyup', function () {
            var ratio = this.value/tmp.canvas.height;
            document.getElementById('pe-widthValue').value = Math.round(tmp.canvas.width * ratio);
        });

        document.getElementById("pe-doneBttn").onclick = this.resizeImage.bind(this, {'resizeStatus' : true});
    },

    resizeImage : function (param) {
        var tmpCanvas = document.getElementById('pe-panel');
        var newCanvas = "<canvas id='pe-panel'></canvas>";
        var width;
        var height;
        var image;
        var tmp = this;

        //resize image value
        if (typeof(param.resizeStatus) !== 'undefined' ) {
            width = document.getElementById('pe-widthValue').value;
            height = document.getElementById('pe-heightValue').value;
        } else {
            width = tmpCanvas.width;
            height = tmpCanvas.height;
        }

        image = new Image();
        image.src = document.getElementById('pe-panel').getContext('2d').canvas.toDataURL();
        tmpCanvas.remove();
        document.getElementById('pe-container').innerHTML += newCanvas;

        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);
        tempCtx.canvas.width = width;
        tempCtx.canvas.height = height;

        image.onload = function() {
            //redraw image on canvas
            tempCtx.drawImage(image, 0, 0, width, height);

            //add image to img_arr (for undo/redo)
            var newImg = new Image();
            newImg.src = document.getElementById('pe-panel').getContext('2d').canvas.toDataURL();
            var imgValue = {
                img: newImg,
                width: width,
                height: height
            }
            tmp.img_arr.push(imgValue);
            tmp.stack_position++;
        }

        this.closeEditToolBar();
    },

    /**
     * open blur/brighness/contrast/grayscale/saturate tool bar and change value filter when use move rangeBar
     *
     */
    changeImageFilter: function(name) {
        this.openEditToolBar();
        var tmp = this;
        document.getElementById('pe-slideBar').style.display = 'inline-block';
        if (name == 'blur') {
            document.getElementById('pe-rangeBar').value = 0;
        } else {
            document.getElementById('pe-rangeBar').value = 100;
        }

        document.getElementById(name).style.display = 'inline-block';

        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        var src = tempCtx.canvas.toDataURL();

        var slider = document.getElementById("pe-rangeBar");
        var output = document.getElementById("pe-filterValue");
        output.innerHTML = slider.value;

        slider.oninput = function() {
            output.innerHTML = this.value;
            tmp.applyFilter({'filterStatus' : 'true', 'property' : name.substring(3), 'src' : src });
        }
        document.getElementById("pe-doneBttn").onclick = this.apply.bind(this);
    },

    /**
     * open orientage bar
     * orientage Image: horizontal/vertical/rotateLeft/rotateRight
     */
    orientateImage: function() {
        this.openEditToolBar();
        document.getElementById('pe-orientateBttn').style.display = 'inline-block';
        document.getElementById('pe-vertical').style.display = 'inline-block';
        document.getElementById('pe-horizontal').style.display = 'inline-block';
        document.getElementById('pe-rotateLeft').style.display = 'inline-block';
        document.getElementById('pe-rotateRight').style.display = 'inline-block';

        document.getElementById('pe-vertical').addEventListener('click', function() {
            var width = document.getElementById('pe-panel').width;
            var height = document.getElementById('pe-panel').height;
            imageData = document.getElementById('pe-panel').getContext('2d').canvas.toDataURL();

            var tempCtx = document.getElementById('pe-panel').getContext('2d');
            tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);
            tempCtx.canvas.width = width;
            tempCtx.canvas.height = height;
            tempCtx.translate(tempCtx.canvas.width, 0);
            tempCtx.scale(-1, 1);

            var image = new Image();
            image.src = imageData;
            image.onload = function() {
                tempCtx.drawImage(image, 0, 0, width, height);
            };
            tempCtx.restore();
        });

        document.getElementById('pe-horizontal').addEventListener('click', function() {
            var width = document.getElementById('pe-panel').width;
            var height = document.getElementById('pe-panel').height;
            imageData = document.getElementById('pe-panel').getContext('2d').canvas.toDataURL();

            var tempCtx = document.getElementById('pe-panel').getContext('2d');
            tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);
            tempCtx.canvas.width = width;
            tempCtx.canvas.height = height;
            tempCtx.translate(0, tempCtx.canvas.height);
            tempCtx.scale(1, -1);

            var image = new Image();
            image.src = imageData;
            image.onload = function() {
                tempCtx.drawImage(image, 0, 0, width, height);
            };
            tempCtx.restore();
        });

        document.getElementById('pe-rotateRight').addEventListener('click', function() {
            var width = document.getElementById('pe-panel').width;
            var height = document.getElementById('pe-panel').height;

            imageData = document.getElementById('pe-panel').getContext('2d').canvas.toDataURL();
            var tempCtx = document.getElementById('pe-panel').getContext('2d');
            var blank = document.createElement('canvas');

            //blank canvas
            blank.width = tempCtx.canvas.width;
            blank.height = tempCtx.canvas.height;
            // check if canvas is blank
            if (imageData != blank.toDataURL()) {
                tempCtx.canvas.width = height;
                tempCtx.canvas.height = width;

                tempCtx.clearRect(0, 0, tempCtx.canvas.width, tempCtx.canvas.height);
                tempCtx.translate(height, 0);
                tempCtx.rotate(90 * Math.PI / 180);

                var image = new Image();
                image.src = imageData;
                image.onload = function() {
                    tempCtx.drawImage(image, 0, 0);
                    var zoomW = document.getElementById('pe-panel').style.width;
                    var zommH = document.getElementById('pe-panel').style.height
                    document.getElementById('pe-panel').style.width = zommH;
                    document.getElementById('pe-panel').style.height = zoomW;
                };
                tempCtx.restore();
            }
        });

        document.getElementById('pe-rotateLeft').addEventListener('click', function() {
            var width = document.getElementById('pe-panel').width;
            var height = document.getElementById('pe-panel').height;

            imageData = document.getElementById('pe-panel').getContext('2d').canvas.toDataURL();
            var tempCtx = document.getElementById('pe-panel').getContext('2d');

            //blank canvas
            var blank = document.createElement('canvas');
            blank.width = tempCtx.canvas.width;
            blank.height = tempCtx.canvas.height;
            // check if canvas is blank
            if (imageData != blank.toDataURL()) {

                tempCtx.canvas.width = height;
                tempCtx.canvas.height = width;
                tempCtx.clearRect(0, 0, tempCtx.canvas.width, tempCtx.canvas.height);
                tempCtx.translate(0, width);
                tempCtx.rotate(270 * Math.PI / 180);

                var image = new Image();
                image.src = imageData;
                image.onload = function() {
                    tempCtx.drawImage(image, 0, 0);
                    var zoomW = document.getElementById('pe-panel').style.width;
                    var zommH = document.getElementById('pe-panel').style.height
                    document.getElementById('pe-panel').style.width = zommH;
                    document.getElementById('pe-panel').style.height = zoomW;
                };
                tempCtx.restore();
            }
        });

        document.getElementById("pe-doneBttn").onclick = this.apply.bind(this);
    },

    /**
     * zoom image (zoom in/zoom out) with ratio
     *
     * @param ratio
     */
    zoom: function(val) {

        var tmpCanvas = document.getElementById('pe-panel');
        var newCanvas = "<canvas id='pe-panel'></canvas>";
        var width;
        var height;
        var image;
        var tmp = this;
        widthstack = this.img_arr[this.stack_position].width;
        tmpCanvas.style.left = '';
        tmpCanvas.style.top = '';
        var pre_width = tmpCanvas.getBoundingClientRect().width, pre_height = tmpCanvas.getBoundingClientRect().height;
        width = pre_width * val;
        height = pre_height * val;

        image = new Image();
        image.src = tmp.img_arr[tmp.stack_position].img.src;
        tmpCanvas.remove();
        document.getElementById('pe-container').innerHTML += newCanvas;

        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);
        tempCtx.canvas.width = width;
        tempCtx.canvas.height = height;

        image.onload = function() {
            tempCtx.drawImage(image, 0, 0, width, height);
        }

        var imgValue = {
            img: image,
            width: width,
            height: height
        }
        this.img_arr[this.stack_position] = imgValue;

    },

    /**
     * redraw image in previous status
     *
     */
    undo: function() {
        var pos = this.stack_position;

        if (pos > 0 ) {
            var image = this.img_arr[pos-1];
            document.getElementById("pe-panel").remove();
            var data = "<canvas id='pe-panel'></canvas>";
            document.getElementById('pe-container').innerHTML += data;
            var tempCtx = document.getElementById('pe-panel').getContext('2d');
            tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);

            tempCtx.canvas.width = image.width;
            tempCtx.canvas.height = image.height;

            this.stack_position = pos - 1;
            tempCtx.drawImage(image.img, 0, 0, image.width, image.height);
        }
    },

    /**
     * redraw image in behind status
     *
     */
    redo: function() {
        var pos = this.stack_position;

        if (pos + 1 < this.img_arr.length) {
            var image = this.img_arr[pos+1];
            document.getElementById("pe-panel").remove();
            var data = "<canvas id='pe-panel'></canvas>";
            document.getElementById('pe-container').innerHTML += data;
            var tempCtx = document.getElementById('pe-panel').getContext('2d');
            tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);

            tempCtx.canvas.width = image.width;
            tempCtx.canvas.height = image.height;

            this.stack_position = pos + 1;
            tempCtx.drawImage(image.img, 0, 0, image.width, image.height);
        }
    },

    /**
     * add filter to image on canvas
     *
     */
    applyFilter : function(param) {
        var canvas = document.createElement('canvas');
        var actx = canvas.getContext("2d");

        canvas.width = document.getElementById('pe-panel').width;
        canvas.height = document.getElementById('pe-panel').height;

        var image = new Image();
        if(param.src == '') {
            image.src = document.getElementById('pe-panel').toDataURL();
        } else {
            image.src = param.src;
        }

        //filter value
        if (typeof(param.filterStatus) !== 'undefined') {
            var val = document.getElementById("pe-filterValue").innerHTML;
            if (param.property == 'blur') {
                actx.filter =  param.property+'('+val+'px)';
            } else {
                actx.filter =  param.property+'('+val+'%)';
            }
        }

        //filter sample value
        if(typeof(param.filterSample) !== 'undefined') {
            actx.filter = this.filter[param.filterName];
        }

        image.onload = function() {
            actx.drawImage(image, 0, 0, canvas.width, canvas.height);

            var imageData = actx.getImageData(0, 0, actx.canvas.width, actx.canvas.height);
            var tempCtx = document.getElementById('pe-panel').getContext('2d');

            document.getElementById('pe-panel').setAttribute('width', canvas.width);
            document.getElementById('pe-panel').setAttribute('height', canvas.height);

            tempCtx.putImageData(imageData, 0, 0);
        }
    },

    /**
     * close edit toolbar and add image to img_arr (for undo/redo)
     *
     */
    apply : function () {
        var newCanvas = "<canvas id='pe-panel'></canvas>";
        var tmpCanvas = document.getElementById('pe-panel');
        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        width = tmpCanvas.width;
        height = tmpCanvas.height;
        //add image to img_arr (for undo/redo)
        var newImg = new Image();
        newImg.src = tempCtx.canvas.toDataURL();
        tmpCanvas.remove();

        document.getElementById('pe-container').innerHTML += newCanvas;
        var tempCtx = document.getElementById('pe-panel').getContext('2d');
        tempCtx.clearRect(0, 0, tempCtx.width, tempCtx.height);
        tempCtx.canvas.width = width;
        tempCtx.canvas.height = height;
        newImg.onload = function() {
            tempCtx.drawImage(newImg, 0, 0, width, height);
        }
        var imgValue = {
            img: newImg,
            width: tempCtx.canvas.width,
            height: tempCtx.canvas.height
        }

        this.img_arr.splice(this.stack_position + 1, 0, imgValue);
        this.stack_position++;
        this.closeEditToolBar();
    },

    /**
     * render to HTML IMG Tag
     *
     */
    render : function (src_img, photoeditor_box) {
        if (document.getElementsByClassName('pe-main')[0].nextElementSibling != null) {
            document.getElementById('img_render').remove();
        }
        document.getElementsByClassName('pe-main')[0].style.display = 'none';
        var myImage = document.createElement("IMG");
        myImage.setAttribute('src', src_img);
        myImage.setAttribute('id', 'img_render');
        photoeditor_box.appendChild(myImage);

        document.getElementsByClassName('pe-main')[0].style.display = 'none';
        document.getElementById('img_render').addEventListener('click', function() {
            this.style.display = 'none';
            document.getElementsByClassName('pe-main')[0].style.display = 'block';
        });
    },

    /**
     * make resize area show in image
     * div: area to be change
     * tmp:  is the photo you want to crop 
     */
    makeResizableDiv: function(div, tmp, ratio) {
        const parent = document.getElementById('parent');
        const element = document.querySelector(div);
        const resizers = document.querySelectorAll(div + ' .resizer');
        const minimum_size = 36;
        let original_width = 0;
        let original_height = 0;
        let original_x = 0;
        let original_y = 0;
        let oringin_right = 0;
        let oringin_bottom = 0;
        let original_mouse_x = 0;
        let original_mouse_y = 0;

        tmp.downPointX = parseFloat(getComputedStyle(element, null).getPropertyValue('left').replace('px', ''));
        tmp.downPointY = parseFloat(getComputedStyle(element, null).getPropertyValue('top').replace('px', ''));
        tmp.lastPointX = tmp.downPointX + parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        tmp.lastPointY = tmp.downPointY + parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));

        for (let i = 0;i < resizers.length; i++) {
            const currentResizer = resizers[i];

            currentResizer.addEventListener('mousedown', function(e) {
                var panelTmp = document.getElementById('pe-panel');
                e.preventDefault()
                original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
                original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
                original_x = parseFloat(getComputedStyle(element, null).getPropertyValue('left').replace('px', ''));
                original_y = parseFloat(getComputedStyle(element, null).getPropertyValue('top').replace('px', ''));
                oringin_right = panelTmp.width - original_x - original_width;
                oringin_bottom = panelTmp.height - original_y - original_height;
                original_mouse_x = e.pageX;
                original_mouse_y = e.pageY;
                widthParent = panelTmp.width;
                heightParent = panelTmp.height;
                window.addEventListener('mousemove', resize);
                parent.addEventListener('mouseup', stopResize);
            });

            function resize(e) {
                checkLeft = parseFloat(getComputedStyle(element, null).getPropertyValue('left').replace('px', ''));
                checkTop = parseFloat(getComputedStyle(element, null).getPropertyValue('top').replace('px', ''));
                checkWidth = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
                checkHeight = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));

                if (currentResizer.classList.contains('bottom-right')) {
                    if (ratio === null) {
                        width = original_width + (e.pageX - original_mouse_x);
                        height = original_height + (e.pageY - original_mouse_y);
                    } else {
                        width = original_width + (e.pageX - original_mouse_x);
                        height = (original_width + (e.pageX - original_mouse_x)) / ratio;
                    }

                    if ((checkLeft + checkWidth) >= widthParent) {
                        stopResize();
                        return element.style.width = widthParent - checkLeft - 1 + 'px';
                    }
                    if ((checkTop + checkHeight) >= heightParent) {
                        stopResize();
                        return element.style.height = heightParent - checkTop - 1 + 'px';
                    }
                } else {
                    if (ratio === null) {
                        width = original_width - (e.pageX - original_mouse_x);
                        height = original_height - (e.pageY - original_mouse_y);
                        if (width > minimum_size && height > minimum_size) {
                            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
                            element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
                        }
                    } else {
                        width = original_width - (e.pageX - original_mouse_x);
                        height = (original_width - (e.pageX - original_mouse_x)) / ratio;
                        if (height > minimum_size) {
                            element.style.left = widthParent - oringin_right - width + 'px';
                            element.style.top = heightParent - oringin_bottom - height + 'px';
                        }
                    }

                    if (checkTop < 0) {
                        stopResize();
                        if (width > heightParent){
                            return element.style.height = heightParent + 'px';
                        }
                        return element.style.top = '0px';

                    } if (checkLeft < 0) {
                        stopResize();
                        if (width > widthParent) {
                            return element.style.width = widthParent + 'px';
                        }
                        return element.style.left = '0px';
                    }
                }
                if (width > minimum_size && height > minimum_size) {
                    element.style.width = width + 'px';
                    element.style.height = height + 'px';
                }

                tmp.downPointX = parseFloat(getComputedStyle(element, null).getPropertyValue('left').replace('px', ''));
                tmp.downPointY = parseFloat(getComputedStyle(element, null).getPropertyValue('top').replace('px', ''));
                tmp.lastPointX = tmp.downPointX + parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
                tmp.lastPointY = tmp.downPointY + parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
            }

            function stopResize() {
                window.removeEventListener('mousemove', resize);
            }
        }
    },

    /**
     * drag element when you crop image
     * elmnt: is the dragged area in tmp
     * tmp: is the area to the elmnt drag
     */
    dragElement: function(elmnt, tmp) {
        document.getElementsByClassName('top-left')[0].onmouseover = closeDragElement
        document.getElementsByClassName('top-left')[0].onmousedown = closeDragElement
        document.getElementsByClassName('bottom-right')[0].onmouseover = closeDragElement
        document.getElementsByClassName('bottom-right')[0].onmousedown = closeDragElement

        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        document.getElementById("div-move").onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            divParent = document.getElementById('parent');
            e = e || window.event;
            e.preventDefault();

            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            const maxWidht = parseFloat(getComputedStyle(divParent, null).getPropertyValue('width').replace('px', ''));
            const maxHeight = parseFloat(getComputedStyle(divParent, null).getPropertyValue('height').replace('px', ''));
            const floadTop = parseFloat(getComputedStyle(elmnt, null).getPropertyValue('top').replace('px', ''));
            const floadLeft = parseFloat(getComputedStyle(elmnt, null).getPropertyValue('left').replace('px', ''));
            const floadWidth = parseFloat(getComputedStyle(elmnt, null).getPropertyValue('width').replace('px', ''));
            const floadHeight = parseFloat(getComputedStyle(elmnt, null).getPropertyValue('height').replace('px', ''));

            if (floadTop < 0){
                closeDragElement;
                return elmnt.style.top = 0 + 'px';
            }

            if ((floadTop + floadHeight) > maxHeight){
                closeDragElement;
                return elmnt.style.top = maxHeight - floadHeight + 'px';
            }

            if (floadLeft < 0) {
                closeDragElement;
                return elmnt.style.left = 0 + 'px';
            }

            if ((floadLeft + floadWidth) > maxWidht) {
                closeDragElement;
                return elmnt.style.left = maxWidht - floadWidth + 'px';
            }

            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

            tmp.downPointX = floadLeft;
            tmp.downPointY = floadTop;
            tmp.lastPointX = tmp.downPointX + floadWidth;
            tmp.lastPointY = tmp.downPointY + floadHeight;
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
};
