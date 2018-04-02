export function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};
export function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    };
};
export function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    };
};

export function IsPicture(str) {
    //判断是否是图片 - strFilter必须是小写列举
    var strFilter = ".jpeg|.gif|.jpg|.png|.bmp|.pic|"
    if (str.indexOf(".") > -1) {
        var p = str.lastIndexOf(".");
        //alert(p);
        //alert(this.length);
        var strPostfix = str.substring(p, str.length) + '|';
        strPostfix = strPostfix.toLowerCase();
        //alert(strPostfix);
        if (strFilter.indexOf(strPostfix) > -1) {
            //alert("True");
            return true;
        }
    }
    //alert('False');
    return false;
}