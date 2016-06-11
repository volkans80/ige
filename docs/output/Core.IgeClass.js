Ext.data.JsonP.Core_IgeClass({"tagname":"class","name":"Core.IgeClass","autodetected":{},"files":[{"filename":"IgeClass.js","href":"IgeClass.html#Core-IgeClass"}],"alternateClassNames":["IgeClass"],"members":[{"name":"addComponent","tagname":"method","owner":"Core.IgeClass","id":"method-addComponent","meta":{}},{"name":"classId","tagname":"method","owner":"Core.IgeClass","id":"method-classId","meta":{}},{"name":"data","tagname":"method","owner":"Core.IgeClass","id":"method-data","meta":{}},{"name":"extend","tagname":"method","owner":"Core.IgeClass","id":"method-extend","meta":{}},{"name":"implement","tagname":"method","owner":"Core.IgeClass","id":"method-implement","meta":{}},{"name":"log","tagname":"method","owner":"Core.IgeClass","id":"method-log","meta":{}},{"name":"removeComponent","tagname":"method","owner":"Core.IgeClass","id":"method-removeComponent","meta":{}},{"name":"vanilla","tagname":"method","owner":"Core.IgeClass","id":"method-vanilla","meta":{}}],"aliases":{},"id":"class-Core.IgeClass","component":false,"superclasses":[],"subclasses":["Components.IgeEntityManagerComponent","Components.IgeTiledComponent","Components.IgeTweenComponent","Components.IgeUiManagerComponent","Components.IgeVelocityComponent","Components.Network.IgeNetworkClient","Core.IgeEventingClass","Core.IgeFSM","Core.IgeMap2d","Core.IgeMapStack2d","Core.IgePoint2d","Core.IgePoint3d","Core.IgePoly2d","Core.IgeRect","Core.IgeSceneGraph","Core.IgeTween"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>IgeClass</div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Components.IgeEntityManagerComponent' rel='Components.IgeEntityManagerComponent' class='docClass'>Components.IgeEntityManagerComponent</a></div><div class='dependency'><a href='#!/api/Components.IgeTiledComponent' rel='Components.IgeTiledComponent' class='docClass'>Components.IgeTiledComponent</a></div><div class='dependency'><a href='#!/api/Components.IgeTweenComponent' rel='Components.IgeTweenComponent' class='docClass'>Components.IgeTweenComponent</a></div><div class='dependency'><a href='#!/api/Components.IgeUiManagerComponent' rel='Components.IgeUiManagerComponent' class='docClass'>Components.IgeUiManagerComponent</a></div><div class='dependency'><a href='#!/api/Components.IgeVelocityComponent' rel='Components.IgeVelocityComponent' class='docClass'>Components.IgeVelocityComponent</a></div><div class='dependency'><a href='#!/api/Components.Network.IgeNetworkClient' rel='Components.Network.IgeNetworkClient' class='docClass'>Components.Network.IgeNetworkClient</a></div><div class='dependency'><a href='#!/api/Core.IgeEventingClass' rel='Core.IgeEventingClass' class='docClass'>Core.IgeEventingClass</a></div><div class='dependency'><a href='#!/api/Core.IgeFSM' rel='Core.IgeFSM' class='docClass'>Core.IgeFSM</a></div><div class='dependency'><a href='#!/api/Core.IgeMap2d' rel='Core.IgeMap2d' class='docClass'>Core.IgeMap2d</a></div><div class='dependency'><a href='#!/api/Core.IgeMapStack2d' rel='Core.IgeMapStack2d' class='docClass'>Core.IgeMapStack2d</a></div><div class='dependency'><a href='#!/api/Core.IgePoint2d' rel='Core.IgePoint2d' class='docClass'>Core.IgePoint2d</a></div><div class='dependency'><a href='#!/api/Core.IgePoint3d' rel='Core.IgePoint3d' class='docClass'>Core.IgePoint3d</a></div><div class='dependency'><a href='#!/api/Core.IgePoly2d' rel='Core.IgePoly2d' class='docClass'>Core.IgePoly2d</a></div><div class='dependency'><a href='#!/api/Core.IgeRect' rel='Core.IgeRect' class='docClass'>Core.IgeRect</a></div><div class='dependency'><a href='#!/api/Core.IgeSceneGraph' rel='Core.IgeSceneGraph' class='docClass'>Core.IgeSceneGraph</a></div><div class='dependency'><a href='#!/api/Core.IgeTween' rel='Core.IgeTween' class='docClass'>Core.IgeTween</a></div><h4>Files</h4><div class='dependency'><a href='source/IgeClass.html#Core-IgeClass' target='_blank'>IgeClass.js</a></div></pre><div class='doc-contents'><p>The base class system.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-addComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-addComponent' class='name expandable'>addComponent</a>( <span class='pre'>component, [options]</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new instance of the component argument passing\nthe options argument to the component as it is initialised. ...</div><div class='long'><p>Creates a new instance of the component argument passing\nthe options argument to the component as it is initialised.\nThe new component instance is then added to \"this\" via\na property name that is defined in the component class as\n\"componentId\".</p>\n\n<h1>Add the velocity component to an entity</h1>\n\n<pre><code>var entity = new IgeEntity();\nentity.addComponent(IgeVelocityComponent);\n\n// Now that the component is added, we can access\n// the component via it's namespace. Call the\n// \"byAngleAndPower\" method of the velocity component:\nentity.velocity.byAngleAndPower(Math.radians(20), 0.1);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><div class='sub-desc'><p>The class definition of the component.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An options parameter to pass to the component\non init.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-classId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-classId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-classId' class='name expandable'>classId</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the class id. ...</div><div class='long'><p>Returns the class id. Primarily used to help identify\nwhat class an instance was instantiated with and is also\noutput during the ige.scenegraph() method's console logging\nto show what class an object belongs to.</p>\n\n<h1>Get the class id of an object</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output \"IgeEntity\"\nconsole.log(entity.classId());\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>class id</p>\n</div></li></ul></div></div></div><div id='method-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-data' class='name expandable'>data</a>( <span class='pre'>key, [value]</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a>/Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets / sets a key / value pair in the object's data object. ...</div><div class='long'><p>Gets / sets a key / value pair in the object's data object. Useful for\nstoring arbitrary game data in the object.</p>\n\n<h1>Set some arbitrary data key value pair</h1>\n\n<pre><code>var entity = new IgeEntity();\nentity.data('playerScore', 100);\nentity.data('playerName', 'iRock');\n</code></pre>\n\n<h1>Get the value of a data key</h1>\n\n<pre><code>console.log(entity.data('playerScore'));\nconsole.log(entity.data('playerName'));\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key under which the data resides.</p>\n</div></li><li><span class='pre'>value</span> : Object (optional)<div class='sub-desc'><p>The data to set under the specified key.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a>/Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-extend' class='name expandable'>extend</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new IgeClass that inherits from this class\n\nCreating a new class by extending an existing one\n\nvar NewClass ...</div><div class='long'><p>Create a new IgeClass that inherits from this class</p>\n\n<h1>Creating a new class by extending an existing one</h1>\n\n<pre><code>var NewClass = <a href=\"#!/api/Core.IgeClass-method-extend\" rel=\"Core.IgeClass-method-extend\" class=\"docClass\">IgeClass.extend</a>({\n    // Init is your constructor\n    init: function () {\n        console.log('I\\'m alive!');\n    }\n});\n</code></pre>\n\n<p>Further reading: <a href=\"http://www.isogenicengine.com/documentation/isogenic-game-engine/versions/1-1-0/manual/engine-fundamentals/classes/extending-classes/\">Extending Classes</a></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-implement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-implement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-implement' class='name expandable'>implement</a>( <span class='pre'>classObj, overwrite</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Copies all properties and methods from the classObj object\nto \"this\". ...</div><div class='long'><p>Copies all properties and methods from the classObj object\nto \"this\". If the overwrite flag is not set or set to false,\nonly properties and methods that don't already exists in\n\"this\" will be copied. If overwrite is true, they will be\ncopied regardless.</p>\n\n<h1>Implement all the methods of an object into another object</h1>\n\n<pre><code>// Create a couple of test entities with ids\nvar entity1 = new IgeEntity().id('entity1'),\n    entity2 = new IgeEntity().id('entity2');\n\n// Let's define an object with a couple of methods\nvar obj = {\n    newMethod1: function () {\n        console.log('method1 called on object: ' + this.id());\n    },\n\n    newMethod2: function () {\n        console.log('method2 called on object: ' + this.id());\n    }\n};\n\n// Now let's implement the methods on our entities\nentity1.implement(obj);\nentity2.implement(obj);\n\n// The entities now have the newMethod1 and newMethod2\n// methods as part of their instance so we can call them:\nentity1.newMethod1();\n\n// The output to the console is:\n//    method1 called on object: entity1\n\n// Now let's call newMethod2 on entity2:\nentity2.newMethod2();\n\n// The output to the console is:\n//    method2 called on object: entity2\n\n// As you can see, this is a great way to add extra modular\n// functionality to objects / entities at runtime.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classObj</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>overwrite</span> : Boolean<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-log' class='name expandable'>log</a>( <span class='pre'>text, type, [obj]</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Provides logging capabilities to all IgeClass instances. ...</div><div class='long'><p>Provides logging capabilities to all IgeClass instances.</p>\n\n<h1>Log a message</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output:\n//     IGE *log* [IgeEntity] : hello\nentity.log('Hello');\n</code></pre>\n\n<h1>Log an info message with an optional parameter</h1>\n\n<pre><code>var entity = new IgeEntity(),\n    param = 'moo';\n\n// Will output:\n//    moo\n//    IGE *log* [IgeEntity] : hello\nentity.log('Hello', 'info', param);\n</code></pre>\n\n<h1>Log a warning message (which will cause a stack trace to be shown)</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output (stack trace is just an example here, real one will be more useful):\n//    Stack: {anonymous}()@&lt;anonymous&gt;:2:8\n//    ---- Object.InjectedScript._evaluateOn (&lt;anonymous&gt;:444:39)\n//    ---- Object.InjectedScript._evaluateAndWrap (&lt;anonymous&gt;:403:52)\n//    ---- Object.InjectedScript.evaluate (&lt;anonymous&gt;:339:21)\n//    IGE *warning* [IgeEntity] : A test warning\nentity.log('A test warning', 'warning');\n</code></pre>\n\n<h1>Log an error message (which will cause an exception to be raised and a stack trace to be shown)</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output (stack trace is just an example here, real one will be more useful):\n//    Stack: {anonymous}()@&lt;anonymous&gt;:2:8\n//    ---- Object.InjectedScript._evaluateOn (&lt;anonymous&gt;:444:39)\n//    ---- Object.InjectedScript._evaluateAndWrap (&lt;anonymous&gt;:403:52)\n//    ---- Object.InjectedScript.evaluate (&lt;anonymous&gt;:339:21)\n//    IGE *error* [IgeEntity] : An error message\nentity.log('An error message', 'error');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text to log.</p>\n</div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The type of log to output, can be 'log',\n'info', 'warning' or 'error'.</p>\n</div></li><li><span class='pre'>obj</span> : Object (optional)<div class='sub-desc'><p>An optional object that will be output\nbefore the log text is output.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-removeComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-removeComponent' class='name expandable'>removeComponent</a>( <span class='pre'>componentId</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a component by it's id. ...</div><div class='long'><p>Removes a component by it's id.</p>\n\n<h1>Remove a component by it's id (namespace)</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Let's add the velocity component\nentity.addComponent(IgeVelocityComponent);\n\n// Now that the component is added, let's remove\n// it via it's id (\"velocity\")\nentity.removeComponent('velocity');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>componentId</span> : String<div class='sub-desc'><p>The id of the component to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-vanilla' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Core.IgeClass'>Core.IgeClass</span><br/><a href='source/IgeClass.html#Core-IgeClass-method-vanilla' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-vanilla' class='name expandable'>vanilla</a>( <span class='pre'>prop</span> ) : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Test method ...</div><div class='long'><p>Test method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});