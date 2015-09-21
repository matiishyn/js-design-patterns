# JavaScript Design Patterns

## Resources:
* Addy Osmani's [book](http://addyosmani.com/resources/essentialjsdesignpatterns/book) in [GitHub](https://github.com/addyosmani/essential-js-design-patterns)


## Anti-Pattern
is a bad design that is worthy of documenting

## Categories Of Design Pattern
#### Creational Design Patterns
focus on handling object creation mechanisms where objects are created in a manner suitable for the situation we're working in. 
Patterns: Constructor, Factory, Abstract, Prototype, Singleton and Builder.

#### Structural Design Patterns
are concerned with object composition and typically identify simple ways to realize relationships between different objects. Patterns: Decorator, Facade, Flyweight, Adapter and Proxy

#### Behavioral Design Patterns
focus on improving or streamlining the communication between disparate objects in a system. Patterns: Iterator, Mediator, Observer and Visitor.

## Patterns

Pattern | Description  
---|---
**Creational** | Based on the concept of creating an object.
***Class*** | 
Factory Method | This makes an instance of several derived classes based on interfaced data or events.
***Object*** | 
Abstract Factory | Creates an instance of several families of classes without detailing concrete classes.
Builder | Separates object construction from its representation, always creates the same type of object.
Prototype | A fully initialized instance used for copying or cloning.
Singleton | A class with only a single instance with global access points.
- | -
**Structural** | Based on the idea of building blocks of objects.
***Class*** | 
Adapter | Match interfaces of different classes therefore classes can work together despite incompatible interfaces.
***Object*** | 
Adapter | Match interfaces of different classes therefore classes can work together despite incompatible interfaces.
Bridge | Separates an object's interface from its implementation so the two can vary independently.
Composite | A structure of simple and composite objects which makes the total object more than just the sum of its parts.
Decorator | Dynamically add alternate processing to objects.
Facade | A single class that hides the complexity of an entire subsystem.
Flyweight | A fine-grained instance used for efficient sharing of information that is contained elsewhere.
Proxy | A place holder object representing the true object.
-|-
**Behavioral**|Based on the way objects play and work together.
***Class*** | 
Interpreter|A way to include language elements in an application to match the grammar of the intended language.
Template Method|Creates the shell of an algorithm in a method, then defer the exact steps to a subclass.
***Object*** | 
Chain of Responsibility|A way of passing a request between a chain of objects to find the object that can handle the request.
Command|Encapsulate a command request as an object to enable, logging and/or queuing of requests, and provides error-handling for unhandled requests.
Iterator | Sequentially access the elements of a collection without knowing the inner workings of the collection.
Mediator | Defines simplified communication between classes to prevent a group of classes from referring explicitly to each other.
Memento| Capture an object's internal state to be able to restore it later.
Observer| A way of notifying change to a number of classes to ensure consistency between the classes.
State| Alter an object's behavior when its state changes.
Strategy| Encapsulates an algorithm inside a class separating the selection from the implementation.
Visitor|Adds a new operation to a class without changing the class.


## The Constructor Pattern
```js
function Car( model, year, miles ) {
  this.model = model;
}
  
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return "Model is: " + this.model;
};
 
// Usage:
var civic = new Car("Honda Civic");
```

## The Module Pattern
### Modules
* The Module pattern
* Object literal notation
* AMD modules
* CommonJS modules
* ES6 modules

### Object Literals
```js
var myModule = {
  myConfig: {
    useCaching: true,
    language: "en"
  },
 
  saySomething: function () {
    console.log( "Where in the world is Paul Irish today?" );
  }
};

// usage
myModule.saySomething();
```

### The Module Pattern
```js
var testModule = (function () { 
  var private = 0;
  function privateMethod() {/* ... */}
  return {
    public: function () {
      return counter++;
    }
  };
})();
 
// Usage:
testModule.public();
```

## The Singleton Pattern
```js
var mySingleton = (function () {
  // Instance stores a reference to the Singleton
  var instance;
 
  function init() {
    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }
    return {
      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },
      publicProperty: "I am also public"
 
    };
  };
 
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();
 
// Usage:
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
```

## The Observer Pattern. [Ref](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)
The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.

When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers (which can include specific data related to the topic of the notification).

When we no longer wish for a particular observer to be notified of changes by the subject they are registered with, the subject can remove them from the list of observers.

#### Differences Between The Observer And Publish/Subscribe Pattern
The Observer pattern requires that the observer (or object) wishing to receive topic notifications must subscribe this interest to the object firing the event (the subject).

The Publish/Subscribe pattern however uses a topic/event channel which sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). This event system allows code to define application specific events which can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher.

This differs from the Observer pattern as it allows any subscriber implementing an appropriate event handler to register for and receive topic notifications broadcast by the publisher.
```js
// Publish
// jQuery: $(obj).trigger("channel", [arg1, arg2, arg3]);
$( el ).trigger( "/login", [{username:"test", userData:"test"}] );
 
// Subscribe
// jQuery: $(obj).on( "channel", [data], fn );
$( el ).on( "/login", function( event ){...} );
 
// Unsubscribe
// jQuery: $(obj).off( "channel" );
$( el ).off( "/login" );
```
