Ext.data.JsonP.Core_IgeMatrix2d({"tagname":"class","name":"Core.IgeMatrix2d","autodetected":{},"files":[{"filename":"IgeMatrix2d.js","href":"IgeMatrix2d.html#Core-IgeMatrix2d"}],"alternateClassNames":["IgeMatrix2d"],"members":[{"name":"_newRotate","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-_newRotate","meta":{"private":true}},{"name":"_newTranslate","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-_newTranslate","meta":{"private":true}},{"name":"compare","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-compare","meta":{}},{"name":"copy","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-copy","meta":{"chainable":true}},{"name":"getInverse","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-getInverse","meta":{}},{"name":"identity","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-identity","meta":{"chainable":true}},{"name":"multiply","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-multiply","meta":{"chainable":true}},{"name":"multiplyScalar","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-multiplyScalar","meta":{"chainable":true}},{"name":"premultiply","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-premultiply","meta":{"chainable":true}},{"name":"rotateBy","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-rotateBy","meta":{"chainable":true}},{"name":"rotateTo","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-rotateTo","meta":{"chainable":true}},{"name":"rotationDegrees","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-rotationDegrees","meta":{}},{"name":"rotationRadians","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-rotationRadians","meta":{}},{"name":"scaleBy","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-scaleBy","meta":{"chainable":true}},{"name":"scaleTo","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-scaleTo","meta":{"chainable":true}},{"name":"transform","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-transform","meta":{}},{"name":"transformCoord","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-transformCoord","meta":{}},{"name":"transformCoordInverse","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-transformCoordInverse","meta":{}},{"name":"transformRenderingContext","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-transformRenderingContext","meta":{"chainable":true}},{"name":"transformRenderingContextSet","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-transformRenderingContextSet","meta":{"chainable":true}},{"name":"translateBy","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-translateBy","meta":{"chainable":true}},{"name":"translateTo","tagname":"method","owner":"Core.IgeMatrix2d","id":"method-translateTo","meta":{"chainable":true}},{"name":"_newScale","tagname":"method","owner":"Core.IgeMatrix2d","id":"static-method-_newScale","meta":{"private":true,"static":true}}],"aliases":{},"id":"class-Core.IgeMatrix2d","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>IgeMatrix2d</div><h4>Files</h4><div class='dependency'><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d' target='_blank'>IgeMatrix2d.js</a></div></pre><div class='doc-contents'><p>Creates a new transformation matrix.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-_newRotate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-_newRotate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-_newRotate' class='name expandable'>_newRotate</a>( <span class='pre'>angle</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Create a new rotation matrix and set it up for the specified angle in radians. ...</div><div class='long'><p>Create a new rotation matrix and set it up for the specified angle in radians.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>angle</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>A new matrix object.</p>\n</div></li></ul></div></div></div><div id='method-_newTranslate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-_newTranslate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-_newTranslate' class='name expandable'>_newTranslate</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Create a translation matrix. ...</div><div class='long'><p>Create a translation matrix.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>X translation magnitude.</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>Y translation magnitude.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>A new matrix object.</p>\n</div></li></ul></div></div></div><div id='method-compare' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-compare' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-compare' class='name expandable'>compare</a>( <span class='pre'>matrix</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matrix</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-copy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-copy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-copy' class='name expandable'>copy</a>( <span class='pre'>matrix</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Copy into this matrix the given matrix values. ...</div><div class='long'><p>Copy into this matrix the given matrix values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matrix</span> : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this.</p>\n</div></li></ul></div></div></div><div id='method-getInverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-getInverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-getInverse' class='name expandable'>getInverse</a>( <span class='pre'></span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new inverse matrix from this matrix. ...</div><div class='long'><p>Creates a new inverse matrix from this matrix.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>An inverse matrix.</p>\n</div></li></ul></div></div></div><div id='method-identity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-identity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-identity' class='name expandable'>identity</a>( <span class='pre'></span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Set this matrix to the identity matrix. ...</div><div class='long'><p>Set this matrix to the identity matrix.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this.</p>\n</div></li></ul></div></div></div><div id='method-multiply' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-multiply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-multiply' class='name expandable'>multiply</a>( <span class='pre'>m</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Multiply this matrix by a given matrix. ...</div><div class='long'><p>Multiply this matrix by a given matrix.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>m</span> : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><div class='sub-desc'><p>The IgeMatrix2d to multiply the\ncurrent matrix by.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this.</p>\n</div></li></ul></div></div></div><div id='method-multiplyScalar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-multiplyScalar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-multiplyScalar' class='name expandable'>multiplyScalar</a>( <span class='pre'>scalar</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Multiply this matrix by a scalar. ...</div><div class='long'><p>Multiply this matrix by a scalar.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scalar</span> : Object<div class='sub-desc'><p>{number} Scalar value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-premultiply' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-premultiply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-premultiply' class='name expandable'>premultiply</a>( <span class='pre'>m</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Premultiply this matrix by a given matrix. ...</div><div class='long'><p>Premultiply this matrix by a given matrix.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>m</span> : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><div class='sub-desc'><p>The IgeMatrix2d to premultiply the\ncurrent matrix by.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this.</p>\n</div></li></ul></div></div></div><div id='method-rotateBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-rotateBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-rotateBy' class='name expandable'>rotateBy</a>( <span class='pre'>angle</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>angle</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-rotateTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-rotateTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-rotateTo' class='name expandable'>rotateTo</a>( <span class='pre'>angle</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>angle</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-rotationDegrees' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-rotationDegrees' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-rotationDegrees' class='name expandable'>rotationDegrees</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the rotation from the matrix and returns it in\ndegrees. ...</div><div class='long'><p>Gets the rotation from the matrix and returns it in\ndegrees.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-rotationRadians' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-rotationRadians' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-rotationRadians' class='name expandable'>rotationRadians</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets the rotation from the matrix and returns it in\nradians. ...</div><div class='long'><p>Gets the rotation from the matrix and returns it in\nradians.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-scaleBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-scaleBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-scaleBy' class='name expandable'>scaleBy</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-scaleTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-scaleTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-scaleTo' class='name expandable'>scaleTo</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-transform' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-transform' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-transform' class='name expandable'>transform</a>( <span class='pre'>points, obj</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>points</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>obj</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-transformCoord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-transformCoord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-transformCoord' class='name expandable'>transformCoord</a>( <span class='pre'>point</span> ) : <a href=\"#!/api/Core.IgePoint3d\" rel=\"Core.IgePoint3d\" class=\"docClass\">IgePoint3d</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Transform a point by this matrix. ...</div><div class='long'><p>Transform a point by this matrix. The parameter point will be modified with the transformation values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : <a href=\"#!/api/Core.IgePoint3d\" rel=\"Core.IgePoint3d\" class=\"docClass\">IgePoint3d</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgePoint3d\" rel=\"Core.IgePoint3d\" class=\"docClass\">IgePoint3d</a></span><div class='sub-desc'><p>The passed point.</p>\n</div></li></ul></div></div></div><div id='method-transformCoordInverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-transformCoordInverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-transformCoordInverse' class='name expandable'>transformCoordInverse</a>( <span class='pre'>point</span> ) : <a href=\"#!/api/Core.IgePoint3d\" rel=\"Core.IgePoint3d\" class=\"docClass\">IgePoint3d</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Transform a point by this matrix in inverse. ...</div><div class='long'><p>Transform a point by this matrix in inverse. The parameter point will be modified with the transformation values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>point</span> : <a href=\"#!/api/Core.IgePoint3d\" rel=\"Core.IgePoint3d\" class=\"docClass\">IgePoint3d</a><div class='sub-desc'><p>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgePoint3d\" rel=\"Core.IgePoint3d\" class=\"docClass\">IgePoint3d</a></span><div class='sub-desc'><p>The passed point.</p>\n</div></li></ul></div></div></div><div id='method-transformRenderingContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-transformRenderingContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-transformRenderingContext' class='name expandable'>transformRenderingContext</a>( <span class='pre'>ctx</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Transforms the passed rendering context by the current matrix\ndata using the transform() method so that the matrix da...</div><div class='long'><p>Transforms the passed rendering context by the current matrix\ndata using the transform() method so that the matrix data\nis set cumulative with the previous matrix data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : CanvasRenderingContext2d<div class='sub-desc'><p>The rendering context to\nset the transform matrix for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-transformRenderingContextSet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-transformRenderingContextSet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-transformRenderingContextSet' class='name expandable'>transformRenderingContextSet</a>( <span class='pre'>ctx</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Transforms the passed rendering context by the current matrix\ndata using the setTransform() method so that the matrix...</div><div class='long'><p>Transforms the passed rendering context by the current matrix\ndata using the setTransform() method so that the matrix data\nis set non-cumulative with the previous matrix data.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ctx</span> : CanvasRenderingContext2d<div class='sub-desc'><p>The rendering context to\nset the transform matrix for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-translateBy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-translateBy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-translateBy' class='name expandable'>translateBy</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-translateTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-method-translateTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-method-translateTo' class='name expandable'>translateTo</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets this matrix as a translation matrix. ...</div><div class='long'><p>Sets this matrix as a translation matrix.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-_newScale' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeMatrix2d'>Core.IgeMatrix2d</span><br/><a href='source/IgeMatrix2d.html#Core-IgeMatrix2d-static-method-_newScale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeMatrix2d-static-method-_newScale' class='name expandable'>_newScale</a>( <span class='pre'>x, y</span> ) : <a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a><span class=\"signature\"><span class='private' >private</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Create a scale matrix. ...</div><div class='long'><p>Create a scale matrix.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>X scale magnitude.</p>\n</div></li><li><span class='pre'>y</span> : Number<div class='sub-desc'><p>Y scale magnitude.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeMatrix2d\" rel=\"Core.IgeMatrix2d\" class=\"docClass\">IgeMatrix2d</a></span><div class='sub-desc'><p>a matrix object.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});