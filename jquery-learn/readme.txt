jQuery is a fast, small, and feature-rich JavaScript library. It makes things
like HTML document traversal and manipulation, event handling, animation, and
Ajax much simpler with an easy-to-use API that works across a multitude of
browsers.

https://api.jquery.com/

== Examples & Credits

Many of the examples in this folder are directly from jquery documentation.

== Quick Reference

jQuery Selector

https://api.jquery.com/category/selectors/basic-css-selectors/

== jQuery UI

jQuery UI contains many widgets that maintain state and therefore may have a
slightly different usage pattern than typical jQuery plugins you are already used
to. While the initialization is the same as most jQuery plugins, jQuery UI's widgets
are built on top of the Widget Factory which provides the same general API to all of them.


=== Widget Factory

Writing jQuery plugins is as simple as adding a method to jQuery.prototype (more
commonly seen as $.fn) and following some simple conventions like returning this for
chainability.

Most jQuery plugins are stateless; they perform some action and their job is done.
For example, if you set the text of an element using .text( "hello" ), there is no
setup phase and the result is always the same. For these types of plugins, it makes
sense to just extend jQuery's prototype.

However, some plugins are stateful; they have full life cycles, maintain state, and
react to changes. These plugins require a lot of code dedicated to initialization
and state management (and sometimes destruction).

The widget factory aims to solve both problems, removing the boilerplate and creating
a consistent API across plugins.
