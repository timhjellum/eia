/**
 * PureMVC MultiCore Framework for Javascript (Ported) - Copyright © 2011-2012 David Foley, Frédéric Saunier, Alain Duchesneau 
 * PureMVC - Copyright © 2006-2012 Futurescale, Inc.
 * All rights reserved.

 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of Futurescale, Inc., PureMVC.org, nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

 *THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
 
/**
 * @fileOverview
 * PureMVC JS Curl and Classy Port by Ryan Lynch 
 * Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * Reuse governed by Creative Commons Attribution 3.0 
 * http://creativecommons.org/licenses/by/3.0/us/
 */
define([
	'classy'
],
function(Class){

 	/* implementation begin */
	
	

/**
 * @author PureMVC JS AMD Classy Port by Ryan Lynch
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Observer
 * 
 * A base Observer implementation.
 * 
 * An Observer is an object that encapsulates information
 * about an interested object with a method that should 
 * be called when a particular Notification is broadcast. 
 * 
 * In PureMVC, the Observer class assumes these responsibilities:
 * 
 * - Encapsulate the notification (callback) method of the interested object.
 * - Encapsulate the notification context (this) of the interested object.
 * - Provide methods for setting the notification method and context.
 * - Provide a method for notifying the interested object.
 * 
 * 
 * The notification method on the interested object should take 
 * one parameter of type Notification.
 * 
 * 
 * @param {Function} notifyMethod 
 *  the notification method of the interested object
 * @param {Object} notifyContext 
 *  the notification context of the interested object
 * @constructor
 */
var Observer = Class.$extend({
    
    __init__ : function(notifyMethod, notifyContext)
    {
        this.setNotifyMethod(notifyMethod);
        this.setNotifyContext(notifyContext);
    },

    /**
     * Set the Observers notification method.
     * 
     * The notification method should take one parameter of type Notification
     * @param {Function} notifyMethod
     *  the notification (callback) method of the interested object.
     * @return {void}
     */
    setNotifyMethod : function (notifyMethod)
    {
        this.notify= notifyMethod;
    },
    
    /**
     * Set the Observers notification context.
     * 
     * @param {Object} notifyContext
     *  the notification context (this) of the interested object.
     * 
     * @return {void}
     */
    setNotifyContext : function (notifyContext)
    {
        this.context= notifyContext;
    },
    
    /**
     * Get the Function that this Observer will invoke when it is notified.
     * 
     * @private
     * @return {Function}
     */
    getNotifyMethod : function ()
    {
        return this.notify;
    },
    
    /**
     * Get the Object that will serve as the Observers callback execution context
     * 
     * @private
     * @return {Object}
     */
    getNotifyContext : function ()
    {
        return this.context;
    },
    
    /**
     * Notify the interested object.
     * 
     * @param {puremvc.Notification} notification
     *  The Notification to pass to the interested objects notification method
     * @return {void}
     */
    notifyObserver : function (notification)
    {
        this.getNotifyMethod().call(this.getNotifyContext(), notification);
    },
    
    /**
     * Compare an object to this Observers notification context.
     * 
     * @param {Object} object
     *  
     * @return {boolean}
     */
    compareNotifyContext : function (object)
    {
        return object === this.context;
    },
    
    /**
     * The Observers callback Function
     * 
     * @private
     * @type {Function}
     */
    notify : null,
    
    /**
     * The Observers callback Object
     * @private
     * @type {Object}
     */
    context : null
});
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Notification
 * 
 * A base Notification implementation.
 * 
 * PureMVC does not rely upon underlying event models such as the one provided 
 * with the DOM or other browser centric W3C event models.
 * 
 * The Observer Pattern as implemented within PureMVC exists to support 
 * event-driven communication between the application and the actors of the MVC 
 * triad.
 * 
 * Notifications are not meant to be a replacement for events in the browser. 
 * Generally, Mediator implementors place event listeners on their view 
 * components, which they then handle in the usual way. This may lead to the 
 * broadcast of Notifications to trigger commands or to communicate with other 
 * Mediators. {@link puremvc.Proxy Proxy},
 * {@link puremvc.SimpleCommand SimpleCommand}
 * and {@link puremvc.MacroCommand MacroCommand}
 * instances communicate with each other and 
 * {@link puremvc.Mediator Mediator}s
 * by broadcasting Notifications.
 * 
 * A key difference between browser events and PureMVC Notifications is that
 * events follow the 'Chain of Responsibility' pattern, 'bubbling' up the 
 * display hierarchy until some parent component handles the event, while 
 * PureMVC Notification follow a 'Publish/Subscribe' pattern. PureMVC classes 
 * need not be related to each other in a parent/child relationship in order to 
 * communicate with one another using Notifications.
 * 
 * @constructor 
 * @param {string} name
 *  The Notification name
 * @param {Object} [body]
 *  The Notification body
 * @param {Object} [type]
 *  The Notification type
 */
var Notification = Class.$extend({
    
    __init__ : function(name, body, type)
    {
        this.name= name;
        this.body= body;
        this.type= type;
    },

    /**
     * Get the name of the Notification instance
     *
     * @return {string}
     *  The name of the Notification instance
     */
    getName : function()
    {
        return this.name;
    },
    
    /**
     * Set this Notifications body. 
     * @param {Object} body
     * @return {void}
     */
    setBody : function(body)
    {
        this.body= body;
    },

    /**
     * Get the Notification body.
     *
     * @return {Object}
     */
    getBody : function()
    {
        return this.body
    },

    /**
     * Set the type of the Notification instance.
     *
     * @param {Object} type
     * @return {void}
     */
    setType : function(type)
    {
        this.type= type;
    },
    
    /**
     * Get the type of the Notification instance.
     * 
     * @return {Object}
     */
    getType : function()
    {
        return this.type;
    },
    
    /**
     * Get a string representation of the Notification instance
     *
     * @return {string}
     */
    toString : function()
    {
        var msg= "Notification Name: " + this.getName();
        msg+= "\nBody:" + ((this.body == null ) ? "null" : this.body.toString());
        msg+= "\nType:" + ((this.type == null ) ? "null" : this.type);
        return msg;
    },
    
    /**
     * The Notifications name.
     *
     * @type {string}
     * @private
     */
    name : null,
    
    /**
     * The Notifications type.
     *
     * @type {string}
     * @private
     */
    type : null,
    
    /**
     * The Notifications body.
     *
     * @type {Object}
     * @private
     */
    body : null
});
/**
 * @author PureMVC JS AMD Classy Port by Ryan Lynch
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Notifier
 * 
 * A Base Notifier implementation.
 * 
 * {@link puremvc.MacroCommand MacroCommand}, 
 * {@link puremvc.SimpleCommand SimpleCommand}, 
 * {@link puremvc.Mediator Mediator} and 
 * {@link puremvc.Proxy Proxy}
 * all have a need to send Notifications
 * 
 * The Notifier interface provides a common method called #sendNotification that 
 * relieves implementation code of the necessity to actually construct 
 * Notifications.
 * 
 * The Notifier class, which all of the above mentioned classes
 * extend, provides an initialized reference to the 
 * {@link puremvc.Facade Facade}
 * Multiton, which is required for the convienience method
 * for sending Notifications but also eases implementation as these
 * classes have frequent 
 * {@link puremvc.Facade Facade} interactions 
 * and usually require access to the facade anyway.
 * 
 * NOTE: In the MultiCore version of the framework, there is one caveat to
 * notifiers, they cannot send notifications or reach the facade until they
 * have a valid multitonKey. 
 * 
 * The multitonKey is set:
 *   - on a Command when it is executed by the Controller
 *   - on a Mediator is registered with the View
 *   - on a Proxy is registered with the Model. 
 * 
 * @constructor
 */
var Notifier = Class.$extend({

    /**
     * Create and send a Notification.
     *
     * Keeps us from having to construct new Notification instances in our 
     * implementation code.
     * 
     * @param {string} notificationName
     *  A notification name
     * @param {Object} [body]
     *  The body of the notification
     * @param {string} [type]
     *  The notification type
     * @return {void}
     */
    sendNotification : function(notificationName, body, type)
    {
        var facade = this.getFacade();
        if(facade)
        {
            facade.sendNotification(notificationName, body, type);
        }
    },
    
    
    /**
     * @protected
     * A reference to this Notifier's Facade. This reference will not be available
     * until #initializeNotifier has been called. 
     * 
     * @type {puremvc.Facade}
     */
    facade : null,
    
    /**
     * Initialize this Notifier instance.
     * 
     * This is how a Notifier gets its multitonKey. 
     * Calls to #sendNotification or to access the
     * facade will fail until after this method 
     * has been called.
     * 
     * Mediators, Commands or Proxies may override 
     * this method in order to send notifications
     * or access the Multiton Facade instance as
     * soon as possible. They CANNOT access the facade
     * in their constructors, since this method will not
     * yet have been called.
     * 
     *
     * @param {string} key
     *  The Notifiers multiton key;
     * @return {void}
     */
    initializeNotifier : function(key)
    {
        this.multitonKey = String(key);
        this.facade= this.getFacade();
    },
    
    /**
     * Retrieve the Multiton Facade instance
     *
     *
     * @protected
     * @return {puremvc.Facade}
     */
    getFacade : function()
    {
        if(this.multitonKey == null)
        {
            throw new Error(Notifier.MULTITON_MSG);
        };
    
        return Facade.getInstance(this.multitonKey);
    },
    
    /**
     * @ignore
     * The Notifiers internal multiton key.
     *
     * @protected
     * @type string
     */
    multitonKey : null,
    
    /**
     * @ignore
     * The error message used if the Notifier is not initialized correctly and
     * attempts to retrieve its own multiton key
     *
     * @static
     * @protected
     * @const
     * @type string
     */
    __classvars__ : {
        MULTITON_MSG : "multitonKey for this Notifier not yet initialized!"
    }
});
/**
 * @author PureMVC JS AMD Classy Port by Ryan Lynch 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.SimpleCommand
 * @extends puremvc.Notifier
 *
 * SimpleCommands encapsulate the business logic of your application. Your 
 * subclass should override the #execute method where your business logic will
 * handle the 
 * {@link puremvc.Notification Notification}
 * 
 * Take a look at 
 * {@link puremvc.Facade#registerCommand Facade's registerCommand}
 * or {@link puremvc.Controller#registerCommand Controllers registerCommand}
 * methods to see how to add commands to your application.
 * 
 * @constructor
 */
var SimpleCommand = Notifier.$extend({

	/**
	 * Fulfill the use-case initiated by the given Notification
	 * 
	 * In the Command Pattern, an application use-case typically begins with some
	 * user action, which results in a Notification is handled by the business logic
	 * in the #execute method of a command.
	 * 
	 * @param {puremvc.Notification} notification
	 *  The notification to handle.
	 * @return {void}
	 */
	execute : function (notification) { }
});
/**
 * @author PureMVC JS AMD Classy Port by Ryan Lynch
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.MacroCommand
 * @extends puremvc.Notifier
 * 
 * A base command implementation that executes other commands, such as
 * {@link puremvc.SimpleCommand SimpleCommand}
 * or {@link puremvc.MacroCommand MacroCommand}
 * subclasses.
 *  
 * A MacroCommand maintains an list of
 * command constructor references called *SubCommands*.
 * 
 * When #execute is called, the MacroCommand
 * instantiates and calls #execute on each of its *SubCommands* in turn.
 * Each *SubCommand* will be passed a reference to the original
 * {@link puremvc.Notification Notification} 
 * that was passed to the MacroCommands #execute method
 * 
 * Unlike {@link puremvc.SimpleCommand SimpleCommand}, 
 * your subclass should not override #execute but instead, should 
 * override the #initializeMacroCommand method, calling #addSubCommand once for 
 * each *SubCommand* to be executed.
 * 
 * If your subclass does define a constructor, be sure to call "super" like so
 * 
 *     function MyMacroCommand ()
 *     {
 *         MacroCommand.call(this);
 *     };
 * @constructor
 */
var MacroCommand = Notifier.$extend({
    
    __init__ : function()
    {
        this.subCommands= [];
        this.initializeMacroCommand();
    },

    /**
     * @private
     * @type {Array.<puremvc.SimpleCommand|puremvc.MacroCommand>}
     */
    subCommands : null,
    
    /**
     * @protected
     * Initialize the MacroCommand.
     * 
     * In your subclass, override this method to 
     * initialize the MacroCommand's *SubCommand*  
     * list with command class references like 
     * this:
     * 
     *     // Initialize MyMacroCommand
     *     MyMacroCommand.prototype.initializeMacroCommand= function ()
     *     {
     *         this.addSubCommand( com.me.myapp.controller.FirstCommand );
     *         this.addSubCommand( com.me.myapp.controller.SecondCommand );
     *         this.addSubCommand( com.me.myapp.controller.ThirdCommand );
     *     };
     * 
     * Note that *SubCommand*s may be any command implementor,
     * MacroCommands or SimpleCommands are both acceptable.
     * @return {void}
     */
    initializeMacroCommand : function() {},
    
    /**
     * @protected
     * Add a *SubCommand*
     * 
     * The *SubCommand*s will be called in First In / First Out (FIFO) order
     * @param {Function} commandClassRef
     *  A reference to a subclassed SimpleCommand or MacroCommand constructor
     */
    addSubCommand : function(commandClassRef)
    {
        this.subCommands.push(commandClassRef);
    },
    
    /**
     * Execute this MacroCommands *SubCommands*
     * 
     * The *SubCommand*s will be called in First In / First Out (FIFO) order
     * @param {puremvc.Notification} note
     *  The Notification object to be passed to each *SubCommand*
     */
    execute : function(note)
    {
        // SIC- TODO optimize
        while(this.subCommands.length > 0)
        {
            var ref= this.subCommands.shift();
            var cmd= new ref;
            cmd.initializeNotifier(this.multitonKey);
            cmd.execute(note);
        }
    }
});

/**
 * @author PureMVC JS AMD Classy Port by Ryan Lynch 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Mediator
 * @extends puremvc.Notifier
 * 
 * A base Mediator implementation.
 *
 * In PureMVC, Mediator classes are used to mediate communication between a view 
 * component and the rest of the application.
 *
 * A Mediator should listen to its view components for events, and handle them 
 * by sending notifications (to be handled by other Mediators, 
 * {@link puremvc.SimpleCommand SimpleCommands} 
 * or
 * {@link puremvc.MacroCommand MacroCommands}) 
 * or passing data from the view component directly to a 
 * {@link puremvc.Proxy Proxy}, such as submitting 
 * the contents of a form to a service.
 * 
 * Mediators should not perform business logic, maintain state or other 
 * information for its view component, or break the encapsulation of the view 
 * component by manipulating the view component's children. It should only call 
 * methods or set properties on the view component.
 *  
 * The view component should encapsulate its own behavior and implementation by 
 * exposing methods and properties that the Mediator can call without having to 
 * know about the view component's children.
 * 
 * @constructor
 * @param {string} [mediatorName]
 *  The Mediators name. The Mediators static #NAME value is used by default
 * @param {Object} [viewComponent]
 *  The Mediators {@link #setViewComponent viewComponent}.
 */
var Mediator = Notifier.$extend({
    __init__ : function(mediatorName, viewComponent)
    {
        this.mediatorName= mediatorName || this.$class.NAME;
        this.viewComponent=viewComponent;  
    },

    /**
     * Get the name of the Mediator
     * 
     * @return {string}
     *  The Mediator name
     */
    getMediatorName : function ()
    {
        return this.mediatorName;
    },

    /**
     * Set the Mediators view component. This could
     * be a HTMLElement, a bespoke UiComponent wrapper
     * class, a MooTools Element, a jQuery result or a
     * css selector, depending on which DOM abstraction 
     * library you are using.
     * 
     * 
     * @param {Object} the view component
     * @return {void}
     */
    setViewComponent : function (viewComponent)
    {
        this.viewComponent= viewComponent;
    },

    /**
     * Get the Mediators view component.
     * 
     * Additionally, an optional explicit getter can be
     * be defined in the subclass that defines the 
     * view components, providing a more semantic interface
     * to the Mediator.
     * 
     * This is different from the AS3 implementation in
     * the sense that no casting is required from the
     * object supplied as the view component.
     * 
     *     MyMediator.prototype.getComboBox= function ()
     *     {
     *         return this.viewComponent;  
     *     }
     * 
     * @return {Object}
     *  The view component
     */
    getViewComponent : function ()
    {
        return this.viewComponent;
    },

    /**
     * List the Notification names this Mediator is interested
     * in being notified of.
     * 
     * @return {Array} 
     *  The list of Notification names.
     */
    listNotificationInterests : function ()
    {
        return [];
    },

    /**
     * Handle Notifications.
     * 
     * Typically this will be handled in a switch statement
     * with one 'case' entry per Notification the Mediator
     * is interested in
     * 
     * @param {puremvc.Notification} notification
     * @return {void}
     */
    handleNotification : function (notification)
    {
        return;
    },

    /**
     * Called by the View when the Mediator is registered
     * @return {void}
     */
    onRegister : function ()
    {
        return;
    },

    /**
     * Called by the View when the Mediator is removed
     */
    onRemove : function ()
    {
        return;
    },

    /**
     * @ignore
     * The Mediators name. Should only be accessed by Mediator subclasses.
     * 
     * @protected
     * @type string
     */
    mediatorName : null,

    /**
     * @ignore
     * The Mediators viewComponent. Should only be accessed by Mediator subclasses.
     * 
     * @protected
     * @type Object
     */
    viewComponent : null,

    __classvars : {
        
        /**
         * @static
         * The name of the Mediator.
         * 
         * Typically, a Mediator will be written to serve one specific control or group
         * of controls and so, will not have a need to be dynamically named.
         * 
         * @type {string}
         */
        NAME : "Mediator"
    }
});
/**
 * @author PureMVC JS Native Port by David Foley, Frédéric Saunier, & Alain Duchesneau 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Proxy
 * @extends puremvc.Notifier
 *
 * A base Proxy implementation. 
 * 
 * In PureMVC, Proxy classes are used to manage parts of the application's data 
 * model.
 * 
 * A Proxy might simply manage a reference to a local data object, in which case 
 * interacting with it might involve setting and getting of its data in 
 * synchronous fashion.
 * 
 * Proxy classes are also used to encapsulate the application's interaction with 
 * remote services to save or retrieve data, in which case, we adopt an 
 * asyncronous idiom; setting data (or calling a method) on the Proxy and 
 * listening for a 
 * {@link puremvc.Notification Notification} 
 * to be sent  when the Proxy has retrieved the data from the service. 
 * 
 * 
 * @param {string} [proxyName]
 *  The Proxy's name. If none is provided, the Proxy will use its constructors
 *  NAME property.
 * @param {Object} [data]
 *  The Proxy's data object
 * @constructor
 */
var Proxy = Notifier.$extend({
    
    __init__ : function(proxyName, data)
    {
        this.proxyName= proxyName || this.$class.NAME;
        if(data != null)
        {
            this.setData(data);
        }
    },
    
    /**
     * Get the Proxy's name.
     *
     * @return {string}
     */
    getProxyName : function()
    {
        return this.proxyName;
    },
    
    /**
     * Set the Proxy's data object
     *
     * @param {Object} data
     * @return {void}
     */
    setData : function(data)
    {
        this.data= data;
    },
    
    /**
     * Get the Proxy's data object
     *
     * @return {Object}
     */
    getData : function()
    {
        return this.data;
    },
    
    /**
     * Called by the {@link puremvc.Model Model} when
     * the Proxy is registered.
     *
     * @return {void}
     */
    onRegister : function()
    {
        return;
    },
    
    /**
     * Called by the {@link puremvc.Model Model} when
     * the Proxy is removed.
     * 
     * @return {void}
     */
    onRemove : function()
    {
        return;
    },
    
    /**
     * @ignore
     * The Proxys name.
     *
     * @protected
     * @type String
     */
    proxyName : null,
    
    /**
     * @ignore
     * The Proxy's data object.
     *
     * @protected
     * @type Object
     */
    data : null,
    
    __classvars__ : {
        NAME : "Proxy"
    }
});
/**
 * @author PureMVC JS AMD Class Port by Ryan Lynch 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Facade
 * Facade exposes the functionality of the Controller, Model and View
 * actors to client facing code. 
 * 
 * This Facade implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the static Factory method, 
 * passing the unique key for this instance to #getInstance
 *
 * @constructor
 * @param {string} key
 * 	The multiton key to use to retrieve the Facade instance.
 * @throws {Error} 
 *  If an attempt is made to instantiate Facade directly
 */
var Facade = Class.$extend({
    __init__ : function(key)
    {
        if(this.$class.instanceMap[key] != null)
        {
            throw new Error(this.$class.MULTITON_MSG);
        }
    
        this.initializeNotifier(key);
        this.$class.instanceMap[key] = this;
        this.initializeFacade();
    },

    /**
     * Initialize the Multiton Facade instance.
     * 
     * Called automatically by the constructor. Override in your subclass to any
     * subclass specific initializations. Be sure to call the 'super' 
     * initializeFacade method, though
     * 
     *     MyFacade.prototype.initializeFacade= function ()
     *     {
     *         Facade.call(this);
     *     };
     * @protected
     * @return {void}
     */
    initializeFacade : function()
    {
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    },
    
    /**
     * Initialize the {@link puremvc.Controller Controller}.
     * 
     * Called by the #initializeFacade method.
     * 
     * Override this method in your subclass of Facade
     * if one or both of the following are true:
    
     * - You wish to initialize a different Controller
     * - You have 
     * {@link puremvc.SimpleCommand SimpleCommand}s
     * or {@link puremvc.MacroCommand MacroCommand}s
     * to register with the Controllerat startup.   
     * 
     * If you don't want to initialize a different Controller, 
     * call the 'super' initializeControlle method at the beginning of your
     * method, then register commands.
     * 
     *     MyFacade.prototype.initializeController= function ()
     *     {
     *         Facade.prototype.initializeController.call(this);
     *         this.registerCommand(AppConstants.A_NOTE_NAME, ABespokeCommand)
     *     }
     * 
     * @protected
     * @return {void}
     */
    initializeController : function()
    {
        if(this.controller != null)
            return;
    
        this.controller = Controller.getInstance(this.multitonKey);
    },
    
    /**
     * @protected
     * Initialize the {@link puremvc.Model Model};
     * 
     * Called by the #initializeFacade method.
     * Override this method in your subclass of Facade if one of the following are
     * true:
     * 
     * - You wish to initialize a different Model.
     * 
     * - You have {@link puremvc.Proxy Proxy}s to 
     *   register with the Model that do not retrieve a reference to the Facade at 
     *   construction time.
     * 
     * If you don't want to initialize a different Model
     * call 'super' #initializeModel at the beginning of your method, then register 
     * Proxys.
     * 
     * Note: This method is *rarely* overridden; in practice you are more
     * likely to use a command to create and registerProxys with the Model>, 
     * since Proxys with mutable data will likely
     * need to send Notifications and thus will likely want to fetch a reference to 
     * the Facade during their construction. 
     * 
     * @return {void}
     */
    initializeModel : function()
    {
        if(this.model != null)
            return;
    
        this.model = Model.getInstance(this.multitonKey);
    },
    
    /**
     * @protected
     * 
     * Initialize the {@link puremvc.View View}.
     * 
     * Called by the #initializeFacade method.
     * 
     * Override this method in your subclass of Facade if one or both of the 
     * following are true:
     *
     * - You wish to initialize a different View.
     * - You have Observers to register with the View
     * 
     * If you don't want to initialize a different View 
     * call 'super' #initializeView at the beginning of your
     * method, then register Mediator instances.
     * 
     *     MyFacade.prototype.initializeView= function ()
     *     {
     *         Facade.prototype.initializeView.call(this);
     *         this.registerMediator(new MyMediator());
     *     };
     * 
     * Note: This method is *rarely* overridden; in practice you are more
     * likely to use a command to create and register Mediators
     * with the View, since Mediator instances will need to send 
     * Notifications and thus will likely want to fetch a reference 
     * to the Facade during their construction. 
     * @return {void}
     */
    initializeView : function()
    {
        if(this.view != null)
            return;
    
        this.view = View.getInstance(this.multitonKey);
    },
    
    /**
     * Register a command with the Controller by Notification name
     * @param {string} notificationName
     *  The name of the Notification to associate the command with
     * @param {Function} commandClassRef
     *  A reference ot the commands constructor.
     * @return {void}
     */
    registerCommand : function(notificationName, commandClassRef)
    {
        this.controller.registerCommand(notificationName, commandClassRef);
    },
    
    /**
     * Remove a previously registered command to Notification mapping from the
     * {@link puremvc.Controller#removeCommand Controller}
     * @param {string} notificationName
     *  The name of the the Notification to remove from the command mapping for.
     * @return {void}
     */
    removeCommand : function(notificationName)
    {
        this.controller.removeCommand(notificationName);
    },
    
    /**
     * Check if a command is registered for a given notification.
     * 
     * @param {string} notificationName
     *  A Notification name
     * @return {boolean}
     *  Whether a comman is currently registered for the given notificationName
     */
    hasCommand : function(notificationName)
    {
        return this.controller.hasCommand(notificationName);
    },
    
    /**
     * Register a Proxy with the {@link puremvc.Model#registerProxy Model}
     * by name.
     * 
     * @param {puremvc.Proxy} proxy
     *  The Proxy instance to be registered with the Model.
     * @return {void}
     */
    registerProxy : function(proxy)
    {
        this.model.registerProxy(proxy);
    },
    
    /**
     * Retrieve a Proxy from the Model
     * 
     * @param {string} proxyName
     * @return {puremvc.Proxy}
     */
    retrieveProxy : function(proxyName)
    {
        return this.model.retrieveProxy(proxyName);
    },
    
    /**
     * Remove a Proxy from the Model by name
     * @param {string} proxyName
     *  The name of the Proxy
     * @return {puremvc.Proxy}
     *  The Proxy that was removed from the Model
     */
    removeProxy : function(proxyName)
    {
        var proxy = null;
        if(this.model != null)
        {
            proxy = this.model.removeProxy(proxyName);
        }
    
        return proxy;
    },
    
    /**
     * Check it a Proxy is registered.
     * @param {string} proxyName
     *  A Proxy name
     * @return {boolean}
     *  Whether a Proxy is currently registered with the given proxyName
     */
    hasProxy : function(proxyName)
    {
        return this.model.hasProxy(proxyName);
    },
    
    /**
     * Register a Mediator with with the View.
     * 
     * @param {puremvc.Mediator} mediator
     *  A reference to the Mediator to register
     * @return {void}
     */
    registerMediator : function(mediator)
    {
        if(this.view != null)
        {
            this.view.registerMediator(mediator);
        }
    },
    
    /**
     * Retrieve a Mediator from the View by name
     * 
     * @param {string} mediatorName
     *  The Mediators name
     * @return {puremvc.Mediator}
     *  The retrieved Mediator
     */
    retrieveMediator : function(mediatorName)
    {
        return this.view.retrieveMediator(mediatorName);
    },
    
    /**
     * Remove a Mediator from the View.
     * 
     * @param {string} mediatorName
     *  The name of the Mediator to remove.
     * @return {puremvc.Mediator}
     *  The removed Mediator
     */
    removeMediator : function(mediatorName)
    {
        var mediator = null;
        if(this.view != null)
        {
            mediator = this.view.removeMediator(mediatorName);
        }
    
        return mediator;
    },
    
    /**
     * Check if a Mediator is registered or not.
     * 
     * @param {string} mediatorName
     *  A Mediator name
     * @return {boolean}
     *  Whether a Mediator is registered with the given mediatorName
     */
    hasMediator : function(mediatorName)
    {
        return this.view.hasMediator(mediatorName);
    },
    
    /**
     * Create and send a 
     * {@link puremvc.Notification Notification}
     * 
     * Keeps us from having to construct new Notification instances in our
     * implementation
     * 
     * @param {string} notificationName
     *  The name of the Notification to send
     * @param {Object} [body]
     *  The body of the notification
     * @param {string} [type]
     *  The type of the notification
     * @return {void}
     */
    sendNotification : function(notificationName, body, type)
    {
        this.notifyObservers(new Notification(notificationName, body, type));
    },
    
    /**
     * Notify {@link puremvc.Observer Observer}s
     * 
     * This method is left public mostly for backward compatibility, and to allow
     * you to send custom notification classes using the facade.
     * 
     * Usually you should just call sendNotification and pass the parameters, never 
     * having to construct the notification yourself.
     * 
     * @param {puremvc.Notification} notification
     *  The Notification to send
     * @return {void}
     */
    notifyObservers : function(notification)
    {
        if(this.view != null)
        {
            this.view.notifyObservers(notification);
        }
    },
    
    /**
     * Initialize the Facades Notifier capabilities by setting the Multiton key for 
     * this facade instance.
     * 
     * Not called directly, but instead from the constructor when #getInstance is 
     * invoked. It is necessary to be public in order to implement Notifier
     * 
     * @param {string} key
     * @return {void}
     */
    initializeNotifier : function(key)
    {
        this.multitonKey = key;
    },
    
    /**
     * @ignore
     * The Facades corresponding Controller
     *
     * @protected
     * @type puremvc.Controller
     */
    controller : null,
    
    /**
     * @ignore
     * The Facades corresponding Model instance
     *
     * @protected
     * @type puremvc.Model
     */
    model : null,
    
    /**
     * @ignore
     * The Facades correspnding View instance.
     *
     * @protected
     * @type puremvc.View
     */
    view : null,
    
    /**
     * @ignore
     * The Facades multiton key.
     *
     * @protected
     * @type string
     */
    multitonKey : null,
    
    __classvars__ : {
        
        /**
        * Facade Multiton Factory method.
        * 
        * @param {string} key
        * 	The multiton key use to retrieve a particular Facade instance
        * @return {puremvc.Facade}
        */
       getInstance : function(key)
       {
           if(this.instanceMap[key] == null)
           {
               this.instanceMap[key] = new this(key);
           }
       
           return this.instanceMap[key];
       },
       
       /**
        * Check if a *Core* is registered or not
        *
        * @static
        * @param {string} key
        *  The multiton key for the *Core* in question
        * @return {boolean}
        *  Whether a *Core* is registered with the given key
        */
       hasCore : function(key)
       {
           return this.instanceMap[key] != null;
       },
       
       /**
        * Remove a *Core* 
        * 
        * Remove the Model, View, Controller and Facade for a given key.
        *
        * @static
        * @param {string} key
        * @return {void}
        */
       removeCore : function(key)
       {
           if(this.instanceMap[key] == null)
               return;
       
           Model.removeModel(key);
           View.removeView(key);
           Controller.removeController(key);
           delete this.instanceMap[key];
       },
       
       /**
        * @ignore
        * The Multiton Facade instance map.
        * @static
        * @protected
        * @type Array
        */
       instanceMap : [],
       
       /**
        * @ignore
        * Message Constants
        * @protected
        * @type {string}
        * @const
        * @static
        */
       MULTITON_MSG : "Facade instance for this Multiton key already constructed!"
    }
});
/**
 * @author PureMVC JS AMD Classy Port author Ryan Lynch
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.View
 * 
 * A Multiton View implementation.
 * 
 * In PureMVC, the View class assumes these responsibilities
 * 
 * - Maintain a cache of {@link puremvc.Mediator Mediator}
 *   instances.
 * 
 * - Provide methods for registering, retrieving, and removing 
 *   {@link puremvc.Mediator Mediator}.
 * 
 * - Notifiying {@link puremvc.Mediator Mediator} when they are registered or 
 *   removed.
 * 
 * - Managing the observer lists for each {@link puremvc.Notification Notification}  
 *   in the application.
 * 
 * - Providing a method for attaching {@link puremvc.Observer Observer} to an 
 *   {@link puremvc.Notification Notification}'s observer list.
 * 
 * - Providing a method for broadcasting a {@link puremvc.Notification Notification}.
 * 
 * - Notifying the {@link puremvc.Observer Observer}s of a given 
 *   {@link puremvc.Notification Notification} when it broadcast.
 * 
 * This View implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the static Multiton 
 * Factory #getInstance method.
 * 
 * @param {string} key
 * @constructor
 * @throws {Error} 
 *  if instance for this Multiton key has already been constructed
 */
var View = Class.$extend({
    
    __init__ : function(key)
    {
        if(this.$class.instanceMap[key] != null)
        {
            throw new Error(this.$class.MULTITON_MSG);
        };
    
        this.multitonKey = key;
        this.$class.instanceMap[this.multitonKey] = this;
        this.mediatorMap = [];
        this.observerMap = [];
        this.initializeView();
    },

    /**
     * @protected
     * Initialize the Singleton View instance
     * 
     * Called automatically by the constructor, this is your opportunity to
     * initialize the Singleton instance in your subclass without overriding the
     * constructor
     * 
     * @return {void}
     */
    initializeView : function()
    {
        return;
    },

    /**
     * Register an Observer to be notified of Notifications with a given name
     * 
     * @param {string} notificationName
     *  The name of the Notifications to notify this Observer of
     * @param {puremvc.Observer} observer
     *  The Observer to register.
     * @return {void}
     */
    registerObserver : function(notificationName, observer)
    {
        if(this.observerMap[notificationName] != null)
        {
            this.observerMap[notificationName].push(observer);
        }
        else
        {
            this.observerMap[notificationName] = [observer];
        }
    },
    
    /**
     * Notify the Observersfor a particular Notification.
     * 
     * All previously attached Observers for this Notification's
     * list are notified and are passed a reference to the INotification in 
     * the order in which they were registered.
     * 
     * @param {puremvc.Notification} notification
     *  The Notification to notify Observers of
     * @return {void}
     */
    notifyObservers : function(notification)
    {
        // SIC
        if(this.observerMap[notification.getName()] != null)
        {
            var observers_ref = this.observerMap[notification.getName()], observers = [], observer
    
            for(var i = 0; i < observers_ref.length; i++)
            {
                observer = observers_ref[i];
                observers.push(observer);
            }
    
            for(var i = 0; i < observers.length; i++)
            {
                observer = observers[i];
                observer.notifyObserver(notification);
            }
        }
    },
    
    /**
     * Remove the Observer for a given notifyContext from an observer list for
     * a given Notification name
     * 
     * @param {string} notificationName
     *  Which observer list to remove from
     * @param {Object} notifyContext
     *  Remove the Observer with this object as its notifyContext
     * @return {void}
     */
    removeObserver : function(notificationName, notifyContext)
    {
        // SIC
        var observers = this.observerMap[notificationName];
        for(var i = 0; i < observers.length; i++)
        {
            if(observers[i].compareNotifyContext(notifyContext) == true)
            {
                observers.splice(i, 1);
                break;
            }
        }
    
        if(observers.length == 0)
        {
            delete this.observerMap[notificationName];
        }
    },

    /**
     * Register a Mediator instance with the View.
     * 
     * Registers the Mediator so that it can be retrieved by name,
     * and further interrogates the Mediator for its 
     * {@link puremvc.Mediator#listNotificationInterests interests}.
     *
     * If the Mediator returns any Notification
     * names to be notified about, an Observer is created encapsulating 
     * the Mediator instance's 
     * {@link puremvc.Mediator#handleNotification handleNotification}
     * method and registering it as an Observer for all Notifications the 
     * Mediator is interested in.
     * 
     * @param {puremvc.Mediator} 
     *  a reference to the Mediator instance
     */
    registerMediator : function(mediator)
    {
        if(this.mediatorMap[mediator.getMediatorName()] != null)
        {
            return;
        }
    
        mediator.initializeNotifier(this.multitonKey);
        // register the mediator for retrieval by name
        this.mediatorMap[mediator.getMediatorName()] = mediator;
    
        // get notification interests if any
        var interests = mediator.listNotificationInterests();
    
        // register mediator as an observer for each notification
        if(interests.length > 0)
        {
            // create observer referencing this mediators handleNotification method
            var observer = new Observer(mediator.handleNotification, mediator);
            for(var i = 0; i < interests.length; i++)
            {
                this.registerObserver(interests[i], observer);
            }
        }
    
        mediator.onRegister();
    },

    /**
     * Retrieve a Mediator from the View
     * 
     * @param {string} mediatorName
     *  The name of the Mediator instance to retrieve
     * @return {puremvc.Mediator}
     *  The Mediator instance previously registered with the given mediatorName
     */
    retrieveMediator : function(mediatorName)
    {
        return this.mediatorMap[mediatorName];
    },

    /**
     * Remove a Mediator from the View.
     * 
     * @param {string} mediatorName
     *  Name of the Mediator instance to be removed
     * @return {puremvc.Mediator}
     *  The Mediator that was removed from the View
     */
    removeMediator : function(mediatorName)
    {
        var mediator = this.mediatorMap[mediatorName];
        if(mediator)
        {
            // for every notification the mediator is interested in...
            var interests = mediator.listNotificationInterests();
            for(var i = 0; i < interests.length; i++)
            {
                // remove the observer linking the mediator to the notification
                // interest
                this.removeObserver(interests[i], mediator);
            }
    
            // remove the mediator from the map
            delete this.mediatorMap[mediatorName];
    
            // alert the mediator that it has been removed
            mediator.onRemove();
        }
    
        return mediator;
    },

    /**
     * Check if a Mediator is registered or not.
     * 
     * @param {string} mediatorName
     * @return {boolean}
     *  Whether a Mediator is registered with the given mediatorname
     */
    hasMediator : function(mediatorName)
    {
        return this.mediatorMap[mediatorName] != null;
    },

    /**
     * @ignore
     * The Views internal multiton key.
     *
     * @type string
     * @protected
     */
    multitonKey : null,
    
    /**
     * @ignore
     * The Views internal mapping of mediator names to mediator instances
     *
     * @type Array
     * @protected
     */
    mediatorMap : null,
    
    /**
     * @ignore
     * The Views internal mapping of Notification names to Observer lists
     *
     * @type Array
     * @protected
     */
    observerMap : null,
    
    __classvars__ : {
        /**
         * View Singleton Factory method.
         * 
         * @return {puremvc.View}
         *  The Singleton instance of View
         */
        getInstance : function(key)
        {
            if(this.instanceMap[key] == null)
            {
                this.instanceMap[key] = new this(key);
            };
        
            return this.instanceMap[key];
        },
        
        /**
         * Remove a View instance
         * 
         * @return {void}
         */
        removeView : function(key)
        {
            delete this.instanceMap[key];
        },
        
        /**
         * @ignore
         * The internal map used to store multiton View instances
         *
         * @type Array
         * @protected
         */
        instanceMap : [],
        
        /**
         * @ignore
         * The error message used if an attempt is made to instantiate View directly
         *
         * @type string
         * @protected
         * @const
         * @static
         */
        MULTITON_MSG : "View instance for this Multiton key already constructed!"
    }
});
/**
 * @author PureMVC JS AMD CLassy Port by Ryan Lynch 
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Model
 *
 * A Multiton Model implementation.
 *
 * In PureMVC, the Model class provides
 * access to model objects (Proxies) by named lookup.
 *
 * The Model assumes these responsibilities:
 *
 * - Maintain a cache of {@link puremvc.Proxy Proxy}
 *   instances.
 * - Provide methods for registering, retrieving, and removing
 *   {@link puremvc.Proxy Proxy} instances.
 *
 * Your application must register 
 * {@link puremvc.Proxy Proxy} instances with the Model. 
 * Typically, you use a 
 * {@link puremvc.SimpleCommand SimpleCommand} 
 * or
 * {@link puremvc.MacroCommand MacroCommand} 
 * to create and register Proxy instances once the Facade has initialized the 
 * *Core* actors.
 *
 * This Model implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the 
 * {@link #getInstance static Multiton Factory method} 
 * @constructor
 * @param {string} key
 *  The Models multiton key
 * @throws {Error}
 *  An error is thrown if this multitons key is already in use by another instance
 */
var Model = Class.$extend({
    
    __init__ : function(key)
    {
        if(this.$class.instanceMap[key])
        {
            throw new Error(this.$class.MULTITON_MSG);
        }
    
        this.multitonKey= key;
        this.$class.instanceMap[key]= this;
        this.proxyMap= [];
        this.initializeModel();
    },

    /**
     * Initialize the Model instance.
     * 
     * Called automatically by the constructor, this
     * is your opportunity to initialize the Singleton
     * instance in your subclass without overriding the
     * constructor.
     * 
     * @return void
     */
    initializeModel : function(){},
    
    /**
     * Register a Proxy with the Model
     * @param {puremvc.Proxy}
     */
    registerProxy : function(proxy)
    {
        proxy.initializeNotifier(this.multitonKey);
        this.proxyMap[proxy.getProxyName()]= proxy;
        proxy.onRegister();
    },
    
    /**
     * Retrieve a Proxy from the Model
     * 
     * @param {string} proxyName
     * @return {puremvc.Proxy}
     *  The Proxy instance previously registered with the provided proxyName
     */
    retrieveProxy : function(proxyName)
    {
        return this.proxyMap[proxyName];
    },
    
    /**
     * Check if a Proxy is registered
     * @param {string} proxyName
     * @return {boolean}
     *  whether a Proxy is currently registered with the given proxyName.
     */
    hasProxy : function(proxyName)
    {
        return this.proxyMap[proxyName] != null;
    },
    
    /**
     * Remove a Proxy from the Model.
     * 
     * @param {string} proxyName
     *  The name of the Proxy instance to remove
     * @return {puremvc.Proxy}
     *  The Proxy that was removed from the Model
     */
    removeProxy : function(proxyName)
    {
        var proxy= this.proxyMap[proxyName];
        if(proxy)
        {
            this.proxyMap[proxyName]= null;
            proxy.onRemove();
        }
    
        return proxy;
    },
    
    /**
     * @ignore
     * The map used by the Model to store Proxy instances.
     *
     * @protected
     * @type Array
     */
    proxyMap : null,
    
    /**
     * @ignore
     * The Models multiton key.
     *
     * @protected
     * @type string
     */
    multitonKey : '',
    
    __classvars__ : {
        /**
         * Model Multiton Factory method.
         * 
         * @param {string} key
         *  The multiton key for the Model to retrieve
         * @return {puremvc.Model}
         *  the instance for this Multiton key 
         */
        getInstance : function(key)
        {
            if(this.instanceMap[key] == null)
            {
                this.instanceMap[key]= new this(key);
            }
        
            return this.instanceMap[key];
        },
        
        /**
         * @static
         * Remove a Model instance.
         * 
         * @param {string} key
         * @return {void}
         */
        removeModel : function(key)
        {
            delete this.instanceMap[key];
        },
        
        /**
         * @ignore
         * The map used by the Model to store multiton instances
         *
         * @protected
         * @static
         * @type Array
         */
        instanceMap : [],
        
        /**
         * @ignore
         * Message Constants
         * 
         * @static
         * @type {string}
         */
        MULTITON_MSG : "Model instance for this Multiton key already constructed!"
    }
});

/**
 * @author PureMVC JS AMD Classy Port by Ryan Lynch
 * @author Copyright(c) 2006-2012 Futurescale, Inc., Some rights reserved.
 * 
 * @class puremvc.Controller
 * 
 * In PureMVC, the Controller class follows the 'Command and Controller' 
 * strategy, and assumes these responsibilities:
 * 
 * - Remembering which
 * {@link puremvc.SimpleCommand SimpleCommand}s
 * or 
 * {@link puremvc.MacroCommand MacroCommand}s
 * are intended to handle which 
 * {@link puremvc.Notification Notification}s
 * - Registering itself as an 
 * {@link puremvc.Observer Observer} with
 * the {@link puremvc.View View} for each 
 * {@link puremvc.Notification Notification}
 * that it has an 
 * {@link puremvc.SimpleCommand SimpleCommand} 
 * or {@link puremvc.MacroCommand MacroCommand} 
 * mapping for.
 * - Creating a new instance of the proper 
 * {@link puremvc.SimpleCommand SimpleCommand}s
 * or 
 * {@link puremvc.MacroCommand MacroCommand}s
 * to handle a given 
 * {@link puremvc.Notification Notification} 
 * when notified by the
 * {@link puremvc.View View}.
 * - Calling the command's execute method, passing in the 
 * {@link puremvc.Notification Notification}.
 *
 * Your application must register 
 * {@link puremvc.SimpleCommand SimpleCommand}s
 * or {@link puremvc.MacroCommand MacroCommand}s 
 * with the Controller.
 *
 * The simplest way is to subclass 
 * {@link puremvc.Facade Facade},
 * and use its 
 * {@link puremvc.Facade#initializeController initializeController} 
 * method to add your registrations.
 *
 * @constructor
 * This Controller implementation is a Multiton, so you should not call the 
 * constructor directly, but instead call the static #getInstance factory method, 
 * passing the unique key for this instance to it.
 * @param {string} key
 * @throws {Error}
 *  If instance for this Multiton key has already been constructed
 */
var Controller = Class.$extend({
    
    __init__ : function(key)
    {
        if(this.$class.instanceMap[key] != null)
        {
            throw new Error(this.$class.MULTITON_MSG);
        }
    
        this.multitonKey= key;
        this.$class.instanceMap[this.multitonKey]= this;
        this.commandMap= new Array();
        this.initializeController();
    },

    /**
     * @protected
     * 
     * Initialize the multiton Controller instance.
     *
     * Called automatically by the constructor.
     *
     * Note that if you are using a subclass of View
     * in your application, you should *also* subclass Controller
     * and override the initializeController method in the
     * following way.
     * 
     *     MyController.prototype.initializeController= function ()
     *     {
     *         this.view= MyView.getInstance(this.multitonKey);
     *     };
     * 
     * @return {void}
     */
    initializeController : function()
    {
        this.view= View.getInstance(this.multitonKey);
    },

    /**
     * If a SimpleCommand or MacroCommand has previously been registered to handle
     * the given Notification then it is executed.
     *
     * @param {puremvc.Notification} note
     * @return {void}
     */
    executeCommand : function(note)
    {
        var commandClassRef= this.commandMap[note.getName()];
        if(commandClassRef == null)
            return;
    
        var commandInstance= new commandClassRef();
        commandInstance.initializeNotifier(this.multitonKey);
        commandInstance.execute(note);
    },

    /**
     * Register a particular SimpleCommand or MacroCommand class as the handler for 
     * a particular Notification.
     *
     * If an command already been registered to handle Notifications with this name, 
     * it is no longer used, the new command is used instead.
     *
     * The Observer for the new command is only created if this the irst time a
     * command has been regisered for this Notification name.
     *
     * @param {string} notificationName
     *  the name of the Notification
     * @param {Function} commandClassRef
     *  a command constructor
     * @return {void}
     */
    registerCommand : function(notificationName, commandClassRef)
    {
        if(this.commandMap[notificationName] == null)
        {
            this.view.registerObserver(notificationName, new Observer(this.executeCommand, this));
        }
    
        this.commandMap[notificationName]= commandClassRef;
    },

    /**
     * Check if a command is registered for a given Notification
     *
     * @param {string} notificationName
     * @return {boolean}
     *  whether a Command is currently registered for the given notificationName.
     */
    hasCommand : function(notificationName)
    {
        return this.commandMap[notificationName] != null;
    },

    /**
     * Remove a previously registered command to
     * {@link puremvc.Notification Notification}
     * mapping.
     *
     * @param {string} notificationName
     *  the name of the Notification to remove the command mapping for
     * @return {void}
     */
    removeCommand : function(notificationName)
    {
        if(this.hasCommand(notificationName))
        {
            this.view.removeObserver(notificationName, this);
            this.commandMap[notificationName]= null;
        }
    },
    
    /**
     * Local reference to the Controller's View
     * 
     * @protected
     * @type {puremvc.View}
     */
    view : null,
   
    /**
     * Note name to command constructor mappings
     * 
     * @protected
     * @type {Object}
     */
    commandMap : null,
   
    /**
     * The Controller's multiton key
     * 
     * @protected
     * @type {string}
     */
    multitonKey : null,
    
    __classvars__ : {
        /**
         * The Controllers multiton factory method.
         *
         * @param {string} key
         *  A Controller's multiton key
         * @return {puremvc.Controller}
         *  the Multiton instance of Controller
         */
        getInstance : function(key)
        {
            if(null == this.instanceMap[key])
            {
                this.instanceMap[key]= new this(key);
            }
        
            return this.instanceMap[key];
        },

        /**
         * @static
         * Remove a Controller instance.
         *
         * @param {string} key 
         *  multitonKey of Controller instance to remove
         * @return {void}
         */
        removeController : function(key)
        {
            delete this.instanceMap[key];
        },
        
        /**
         * Multiton key to Controller instance mappings
         * 
         * @static
         * @protected
         * @type {Object}
         */
        instanceMap: [],
        
        /**
         * @ignore
         * 
         * Message constants
         * @static
         * @protected
         * @type {string}
         */
        MULTITON_MSG : "controller key for this Multiton key already constructed"
    }
});
	
 	/* implementation end */
 	 
 	// return the puremvc module and export the actors
 	return({
 		View: View
 	,	Model: Model
 	,	Controller: Controller
 	,	SimpleCommand: SimpleCommand
 	,	MacroCommand: MacroCommand
 	,	Facade: Facade
 	,	Mediator: Mediator
 	,	Observer: Observer
 	,	Notification: Notification
 	,	Notifier: Notifier
 	,	Proxy: Proxy
 	,	define: define
 	}); 
 	
});

