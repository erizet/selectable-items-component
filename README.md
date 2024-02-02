# Selectable items
A simple web component to mark selected elements in a list.

## Usage
```
            <selectable-items selector="a" selection-class="selected">
                <a href="#" role="button">One</a>
                <a href="#" role="button">Two</a>
                <a href="#" role="button">Three</a>
            </selectable-items>
```
Attribute `selector` is used to select items within the child elements, and `selection-class` is the CSS class to add/remove when an element is selected.
