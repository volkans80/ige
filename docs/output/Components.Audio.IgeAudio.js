Ext.data.JsonP.Components_Audio_IgeAudio({"tagname":"class","name":"Components.Audio.IgeAudio","autodetected":{},"files":[{"filename":"IgeAudio.js","href":"IgeAudio.html#Components-Audio-IgeAudio"}],"alternateClassNames":["IgeAudio"],"extends":"IgeEventingClass","members":[{"name":"_processRemovals","tagname":"method","owner":"Core.IgeEventingClass","id":"method-_processRemovals","meta":{"private":true}},{"name":"addComponent","tagname":"method","owner":"Core.IgeClass","id":"method-addComponent","meta":{}},{"name":"classId","tagname":"method","owner":"Core.IgeClass","id":"method-classId","meta":{}},{"name":"data","tagname":"method","owner":"Core.IgeClass","id":"method-data","meta":{}},{"name":"emit","tagname":"method","owner":"Core.IgeEventingClass","id":"method-emit","meta":{}},{"name":"eventList","tagname":"method","owner":"Core.IgeEventingClass","id":"method-eventList","meta":{}},{"name":"extend","tagname":"method","owner":"Core.IgeClass","id":"method-extend","meta":{}},{"name":"id","tagname":"method","owner":"Components.Audio.IgeAudio","id":"method-id","meta":{}},{"name":"implement","tagname":"method","owner":"Core.IgeClass","id":"method-implement","meta":{}},{"name":"load","tagname":"method","owner":"Components.Audio.IgeAudio","id":"method-load","meta":{}},{"name":"log","tagname":"method","owner":"Core.IgeClass","id":"method-log","meta":{}},{"name":"off","tagname":"method","owner":"Core.IgeEventingClass","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"Core.IgeEventingClass","id":"method-on","meta":{}},{"name":"play","tagname":"method","owner":"Components.Audio.IgeAudio","id":"method-play","meta":{}},{"name":"removeComponent","tagname":"method","owner":"Core.IgeClass","id":"method-removeComponent","meta":{}},{"name":"vanilla","tagname":"method","owner":"Core.IgeClass","id":"method-vanilla","meta":{}}],"aliases":{},"id":"class-Components.Audio.IgeAudio","component":false,"superclasses":["Core.IgeClass","Core.IgeEventingClass"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>IgeAudio</div><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='docClass'>Core.IgeClass</a><div class='subclass '><a href='#!/api/Core.IgeEventingClass' rel='Core.IgeEventingClass' class='docClass'>Core.IgeEventingClass</a><div class='subclass '><strong>Components.Audio.IgeAudio</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/IgeAudio.html#Components-Audio-IgeAudio' target='_blank'>IgeAudio.js</a></div></pre><div class='doc-contents'><p>There is no description yet</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_processRemovals' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeEventingClass' rel='Core.IgeEventingClass' class='defined-in docClass'>Core.IgeEventingClass</a><br/><a href='source/IgeEventingClass.html#Core-IgeEventingClass-method-_processRemovals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeEventingClass-method-_processRemovals' class='name expandable'>_processRemovals</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Loops the removals array and processes off() calls for\neach array item. ...</div><div class='long'><p>Loops the removals array and processes off() calls for\neach array item.</p>\n</div></div></div><div id='method-addComponent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-addComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-addComponent' class='name expandable'>addComponent</a>( <span class='pre'>component, [options]</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new instance of the component argument passing\nthe options argument to the component as it is initialised. ...</div><div class='long'><p>Creates a new instance of the component argument passing\nthe options argument to the component as it is initialised.\nThe new component instance is then added to \"this\" via\na property name that is defined in the component class as\n\"componentId\".</p>\n\n<h1>Add the velocity component to an entity</h1>\n\n<pre><code>var entity = new IgeEntity();\nentity.addComponent(IgeVelocityComponent);\n\n// Now that the component is added, we can access\n// the component via it's namespace. Call the\n// \"byAngleAndPower\" method of the velocity component:\nentity.velocity.byAngleAndPower(Math.radians(20), 0.1);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><div class='sub-desc'><p>The class definition of the component.</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An options parameter to pass to the component\non init.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-classId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-classId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-classId' class='name expandable'>classId</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the class id. ...</div><div class='long'><p>Returns the class id. Primarily used to help identify\nwhat class an instance was instantiated with and is also\noutput during the ige.scenegraph() method's console logging\nto show what class an object belongs to.</p>\n\n<h1>Get the class id of an object</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output \"IgeEntity\"\nconsole.log(entity.classId());\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>class id</p>\n</div></li></ul></div></div></div><div id='method-data' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-data' class='name expandable'>data</a>( <span class='pre'>key, [value]</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a>/Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets / sets a key / value pair in the object's data object. ...</div><div class='long'><p>Gets / sets a key / value pair in the object's data object. Useful for\nstoring arbitrary game data in the object.</p>\n\n<h1>Set some arbitrary data key value pair</h1>\n\n<pre><code>var entity = new IgeEntity();\nentity.data('playerScore', 100);\nentity.data('playerName', 'iRock');\n</code></pre>\n\n<h1>Get the value of a data key</h1>\n\n<pre><code>console.log(entity.data('playerScore'));\nconsole.log(entity.data('playerName'));\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key under which the data resides.</p>\n</div></li><li><span class='pre'>value</span> : Object (optional)<div class='sub-desc'><p>The data to set under the specified key.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a>/Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeEventingClass' rel='Core.IgeEventingClass' class='defined-in docClass'>Core.IgeEventingClass</a><br/><a href='source/IgeEventingClass.html#Core-IgeEventingClass-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeEventingClass-method-emit' class='name expandable'>emit</a>( <span class='pre'>eventName, args</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Emit an event by name. ...</div><div class='long'><p>Emit an event by name.</p>\n\n<h1>Emit an Event</h1>\n\n<pre><code>// Emit the event named \"hello\"\nmyEntity.emit('hello');\n</code></pre>\n\n<h1>Emit an Event With Data Object</h1>\n\n<pre><code>// Emit the event named \"hello\"\nmyEntity.emit('hello', {moo: true});\n</code></pre>\n\n<h1>Emit an Event With Multiple Data Values</h1>\n\n<pre><code>// Emit the event named \"hello\"\nmyEntity.emit('hello', [{moo: true}, 'someString']);\n</code></pre>\n\n<h1>Listen for Event Data</h1>\n\n<pre><code>// Set a listener to listen for the data (multiple values emitted\n// from an event are passed as function arguments)\nmyEntity.on('hello', function (arg1, arg2) {\n    console.log(arg1, arg2);\n}\n\n// Emit the event named \"hello\"\nmyEntity.emit('hello', ['data1', 'data2']);\n\n// The console output is:\n//    data1, data2\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'><p>The name of the event to emit.</p>\n</div></li><li><span class='pre'>args</span> : Object/Array<div class='sub-desc'><p>The arguments to send to any listening methods.\nIf you are sending multiple arguments, use an array containing each argument.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-eventList' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeEventingClass' rel='Core.IgeEventingClass' class='defined-in docClass'>Core.IgeEventingClass</a><br/><a href='source/IgeEventingClass.html#Core-IgeEventingClass-method-eventList' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeEventingClass-method-eventList' class='name expandable'>eventList</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns an object containing the current event listeners. ...</div><div class='long'><p>Returns an object containing the current event listeners.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-extend' class='name expandable'>extend</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new IgeClass that inherits from this class\n\nCreating a new class by extending an existing one\n\nvar NewClass ...</div><div class='long'><p>Create a new IgeClass that inherits from this class</p>\n\n<h1>Creating a new class by extending an existing one</h1>\n\n<pre><code>var NewClass = <a href=\"#!/api/Core.IgeClass-method-extend\" rel=\"Core.IgeClass-method-extend\" class=\"docClass\">IgeClass.extend</a>({\n    // Init is your constructor\n    init: function () {\n        console.log('I\\'m alive!');\n    }\n});\n</code></pre>\n\n<p>Further reading: <a href=\"http://www.isogenicengine.com/documentation/isogenic-game-engine/versions/1-1-0/manual/engine-fundamentals/classes/extending-classes/\">Extending Classes</a></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Components.Audio.IgeAudio'>Components.Audio.IgeAudio</span><br/><a href='source/IgeAudio.html#Components-Audio-IgeAudio-method-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Components.Audio.IgeAudio-method-id' class='name expandable'>id</a>( <span class='pre'>[id]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets / sets the current object id. ...</div><div class='long'><p>Gets / sets the current object id. If no id is currently assigned and no\nid is passed to the method, it will automatically generate and assign a\nnew id as a 16 character hexadecimal value typed as a string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String (optional)<div class='sub-desc'><p>The id to set to.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Returns this when setting the value or the current value if none is specified.</p>\n</div></li></ul></div></div></div><div id='method-implement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-implement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-implement' class='name expandable'>implement</a>( <span class='pre'>classObj, overwrite</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Copies all properties and methods from the classObj object\nto \"this\". ...</div><div class='long'><p>Copies all properties and methods from the classObj object\nto \"this\". If the overwrite flag is not set or set to false,\nonly properties and methods that don't already exists in\n\"this\" will be copied. If overwrite is true, they will be\ncopied regardless.</p>\n\n<h1>Implement all the methods of an object into another object</h1>\n\n<pre><code>// Create a couple of test entities with ids\nvar entity1 = new IgeEntity().id('entity1'),\n    entity2 = new IgeEntity().id('entity2');\n\n// Let's define an object with a couple of methods\nvar obj = {\n    newMethod1: function () {\n        console.log('method1 called on object: ' + this.id());\n    },\n\n    newMethod2: function () {\n        console.log('method2 called on object: ' + this.id());\n    }\n};\n\n// Now let's implement the methods on our entities\nentity1.implement(obj);\nentity2.implement(obj);\n\n// The entities now have the newMethod1 and newMethod2\n// methods as part of their instance so we can call them:\nentity1.newMethod1();\n\n// The output to the console is:\n//    method1 called on object: entity1\n\n// Now let's call newMethod2 on entity2:\nentity2.newMethod2();\n\n// The output to the console is:\n//    method2 called on object: entity2\n\n// As you can see, this is a great way to add extra modular\n// functionality to objects / entities at runtime.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classObj</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>overwrite</span> : Boolean<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-load' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Components.Audio.IgeAudio'>Components.Audio.IgeAudio</span><br/><a href='source/IgeAudio.html#Components-Audio-IgeAudio-method-load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Components.Audio.IgeAudio-method-load' class='name expandable'>load</a>( <span class='pre'>url, [callback]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Loads an audio file from the given url. ...</div><div class='long'><p>Loads an audio file from the given url.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The url to load the audio file from.</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>Optional callback method to call when the audio\nfile has loaded or on error.</p>\n</div></li></ul></div></div></div><div id='method-log' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-log' class='name expandable'>log</a>( <span class='pre'>text, type, [obj]</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Provides logging capabilities to all IgeClass instances. ...</div><div class='long'><p>Provides logging capabilities to all IgeClass instances.</p>\n\n<h1>Log a message</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output:\n//     IGE *log* [IgeEntity] : hello\nentity.log('Hello');\n</code></pre>\n\n<h1>Log an info message with an optional parameter</h1>\n\n<pre><code>var entity = new IgeEntity(),\n    param = 'moo';\n\n// Will output:\n//    moo\n//    IGE *log* [IgeEntity] : hello\nentity.log('Hello', 'info', param);\n</code></pre>\n\n<h1>Log a warning message (which will cause a stack trace to be shown)</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output (stack trace is just an example here, real one will be more useful):\n//    Stack: {anonymous}()@&lt;anonymous&gt;:2:8\n//    ---- Object.InjectedScript._evaluateOn (&lt;anonymous&gt;:444:39)\n//    ---- Object.InjectedScript._evaluateAndWrap (&lt;anonymous&gt;:403:52)\n//    ---- Object.InjectedScript.evaluate (&lt;anonymous&gt;:339:21)\n//    IGE *warning* [IgeEntity] : A test warning\nentity.log('A test warning', 'warning');\n</code></pre>\n\n<h1>Log an error message (which will cause an exception to be raised and a stack trace to be shown)</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Will output (stack trace is just an example here, real one will be more useful):\n//    Stack: {anonymous}()@&lt;anonymous&gt;:2:8\n//    ---- Object.InjectedScript._evaluateOn (&lt;anonymous&gt;:444:39)\n//    ---- Object.InjectedScript._evaluateAndWrap (&lt;anonymous&gt;:403:52)\n//    ---- Object.InjectedScript.evaluate (&lt;anonymous&gt;:339:21)\n//    IGE *error* [IgeEntity] : An error message\nentity.log('An error message', 'error');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>The text to log.</p>\n</div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The type of log to output, can be 'log',\n'info', 'warning' or 'error'.</p>\n</div></li><li><span class='pre'>obj</span> : Object (optional)<div class='sub-desc'><p>An optional object that will be output\nbefore the log text is output.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeEventingClass' rel='Core.IgeEventingClass' class='defined-in docClass'>Core.IgeEventingClass</a><br/><a href='source/IgeEventingClass.html#Core-IgeEventingClass-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeEventingClass-method-off' class='name expandable'>off</a>( <span class='pre'>eventName, evtListener, callback</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove an event listener. ...</div><div class='long'><p>Remove an event listener. If the _processing flag is true\nthen the removal will be placed in the removals array to be\nprocessed after the event loop has completed in the emit()\nmethod.</p>\n\n<h1>Switch off an Event Listener</h1>\n\n<pre><code>// Register event lister and store in \"evt\"\nvar evt = myEntity.on('mouseDown', function () { console.log('down'); });\n\n// Switch off event listener\nmyEntity.off('mouseDown', evt);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Boolean<div class='sub-desc'><p>The name of the event you originally registered to listen for.</p>\n</div></li><li><span class='pre'>evtListener</span> : Object<div class='sub-desc'><p>The event listener object to cancel. This object is the one\nreturned when calling the on() method. It is NOT the method you passed as the second argument\nto the on() method.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The callback method to call when the event listener has been\nsuccessfully removed. If you attempt to remove a listener during the event firing loop\nthen the listener will not immediately be removed but will be queued for removal before\nthe next listener loop is fired. In this case you may like to be informed via callback\nwhen the listener has been fully removed in which case, provide a method for this argument.</p>\n\n<p>The callback will be passed a single boolean argument denoting if the removal was successful\n(true) or the listener did not exist to remove (false).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeEventingClass' rel='Core.IgeEventingClass' class='defined-in docClass'>Core.IgeEventingClass</a><br/><a href='source/IgeEventingClass.html#Core-IgeEventingClass-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeEventingClass-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, call, [context], [oneShot], [sendEventName]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Add an event listener method for an event. ...</div><div class='long'><p>Add an event listener method for an event.</p>\n\n<h1>Add an Event Listener</h1>\n\n<pre><code>// Register event lister and store in \"evt\"\nvar evt = myEntity.on('mouseDown', function () { console.log('down'); });\n</code></pre>\n\n<h1>Listen for Event Data</h1>\n\n<pre><code>// Set a listener to listen for the data (multiple values emitted\n// from an event are passed as function arguments)\nmyEntity.on('hello', function (arg1, arg2) {\n    console.log(arg1, arg2);\n}\n\n// Emit the event named \"hello\"\nmyEntity.emit('hello', ['data1', 'data2']);\n\n// The console output is:\n//    data1, data2\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String/Array<div class='sub-desc'><p>The name of the event to listen for (string), or an array of events to listen for.</p>\n</div></li><li><span class='pre'>call</span> : Function<div class='sub-desc'><p>The method to call when the event listener is triggered.</p>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context in which the call to the listening method will be made (sets the 'this' variable in the method to the object passed as this parameter).</p>\n</div></li><li><span class='pre'>oneShot</span> : Boolean (optional)<div class='sub-desc'><p>If set, will instruct the listener to only listen to the event being fired once and will not fire again.</p>\n</div></li><li><span class='pre'>sendEventName</span> : Boolean (optional)<div class='sub-desc'><p>If set, will instruct the emitter to send the event name as the argument instead of any emitted arguments.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The event listener object. Hold this value if you later want to turn off the event listener.</p>\n</div></li></ul></div></div></div><div id='method-play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Components.Audio.IgeAudio'>Components.Audio.IgeAudio</span><br/><a href='source/IgeAudio.html#Components-Audio-IgeAudio-method-play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Components.Audio.IgeAudio-method-play' class='name expandable'>play</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Plays the audio. ...</div><div class='long'><p>Plays the audio.</p>\n</div></div></div><div id='method-removeComponent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-removeComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-removeComponent' class='name expandable'>removeComponent</a>( <span class='pre'>componentId</span> ) : <a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a component by it's id. ...</div><div class='long'><p>Removes a component by it's id.</p>\n\n<h1>Remove a component by it's id (namespace)</h1>\n\n<pre><code>var entity = new IgeEntity();\n\n// Let's add the velocity component\nentity.addComponent(IgeVelocityComponent);\n\n// Now that the component is added, let's remove\n// it via it's id (\"velocity\")\nentity.removeComponent('velocity');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>componentId</span> : String<div class='sub-desc'><p>The id of the component to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Core.IgeClass\" rel=\"Core.IgeClass\" class=\"docClass\">IgeClass</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-vanilla' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Core.IgeClass' rel='Core.IgeClass' class='defined-in docClass'>Core.IgeClass</a><br/><a href='source/IgeClass.html#Core-IgeClass-method-vanilla' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Core.IgeClass-method-vanilla' class='name expandable'>vanilla</a>( <span class='pre'>prop</span> ) : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Test method ...</div><div class='long'><p>Test method</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prop</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});