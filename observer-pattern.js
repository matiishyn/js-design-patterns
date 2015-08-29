The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.

When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers (which can include specific data related to the topic of the notification).

When we no longer wish for a particular observer to be notified of changes by the subject they are registered with, the subject can remove them from the list of observers.


/**
 * jQuery Publish/Subscribe implementation
 */

// Publish
$(el).trigger('login', [data]);

// Subscribe
$(el).on('login',function(event) {});

// Unsubscribe
$(el).off('login');