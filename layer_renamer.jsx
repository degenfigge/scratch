/**
 * After Effects Layer Renamer Script
 * 
 * This script renames all layers in the active composition with sequential numbers.
 * Usage: Run this script in After Effects with a composition selected.
 */

// Main function to rename layers
function renameLayersWithNumbers() {
    // Check if After Effects is running
    if (!app.project) {
        alert("No project is open in After Effects.");
        return;
    }
    
    // Get the active composition
    var comp = app.project.activeItem;
    
    // Check if a composition is selected
    if (!comp || !(comp instanceof CompItem)) {
        alert("Please select a composition first.");
        return;
    }
    
    // Check if composition has layers
    if (comp.numLayers === 0) {
        alert("The selected composition has no layers.");
        return;
    }
    
    // Confirm with user before proceeding
    var confirmMessage = "This will rename all " + comp.numLayers + " layers in '" + comp.name + "' with sequential numbers.\n\nDo you want to continue?";
    if (!confirm(confirmMessage)) {
        return;
    }
    
    // Start undo group for batch operation
    app.beginUndoGroup("Rename Layers with Numbers");
    
    try {
        // Counter for layer numbering
        var layerNumber = 1;
        
        // Iterate through all layers in the composition
        for (var i = 1; i <= comp.numLayers; i++) {
            var layer = comp.layer(i);
            
            // Skip layers that are locked (optional - you can remove this if you want to rename locked layers too)
            if (layer.locked) {
                continue;
            }
            
            // Rename the layer with the sequential number
            layer.name = layerNumber.toString();
            layerNumber++;
        }
        
        // Show success message
        alert("Successfully renamed " + (layerNumber - 1) + " layers with sequential numbers.");
        
    } catch (error) {
        // Show error message if something goes wrong
        alert("An error occurred while renaming layers: " + error.toString());
    } finally {
        // End undo group
        app.endUndoGroup();
    }
}

// Alternative function that includes layer type in the name
function renameLayersWithNumbersAndType() {
    // Check if After Effects is running
    if (!app.project) {
        alert("No project is open in After Effects.");
        return;
    }
    
    // Get the active composition
    var comp = app.project.activeItem;
    
    // Check if a composition is selected
    if (!comp || !(comp instanceof CompItem)) {
        alert("Please select a composition first.");
        return;
    }
    
    // Check if composition has layers
    if (comp.numLayers === 0) {
        alert("The selected composition has no layers.");
        return;
    }
    
    // Confirm with user before proceeding
    var confirmMessage = "This will rename all " + comp.numLayers + " layers in '" + comp.name + "' with sequential numbers and layer types.\n\nDo you want to continue?";
    if (!confirm(confirmMessage)) {
        return;
    }
    
    // Start undo group for batch operation
    app.beginUndoGroup("Rename Layers with Numbers and Types");
    
    try {
        // Counter for layer numbering
        var layerNumber = 1;
        
        // Iterate through all layers in the composition
        for (var i = 1; i <= comp.numLayers; i++) {
            var layer = comp.layer(i);
            
            // Skip layers that are locked
            if (layer.locked) {
                continue;
            }
            
            // Get layer type abbreviation
            var layerType = "";
            if (layer instanceof AVLayer) {
                if (layer.source instanceof FootageItem) {
                    layerType = "Footage";
                } else if (layer.source instanceof CompItem) {
                    layerType = "Comp";
                } else {
                    layerType = "AV";
                }
            } else if (layer instanceof TextLayer) {
                layerType = "Text";
            } else if (layer instanceof ShapeLayer) {
                layerType = "Shape";
            } else if (layer instanceof LightLayer) {
                layerType = "Light";
            } else if (layer instanceof CameraLayer) {
                layerType = "Camera";
            } else {
                layerType = "Layer";
            }
            
            // Rename the layer with number and type
            layer.name = layerNumber + "_" + layerType;
            layerNumber++;
        }
        
        // Show success message
        alert("Successfully renamed " + (layerNumber - 1) + " layers with sequential numbers and types.");
        
    } catch (error) {
        // Show error message if something goes wrong
        alert("An error occurred while renaming layers: " + error.toString());
    } finally {
        // End undo group
        app.endUndoGroup();
    }
}

// Function to create a simple UI for the script
function showUI() {
    // Create a simple dialog
    var dialog = new Window("dialog", "Layer Renamer");
    dialog.orientation = "column";
    dialog.alignChildren = "fill";
    dialog.spacing = 10;
    dialog.margins = 16;
    
    // Add title
    var title = dialog.add("statictext", undefined, "After Effects Layer Renamer");
    title.graphics.font = ScriptUI.newFont("Arial", "BOLD", 14);
    
    // Add description
    var description = dialog.add("statictext", undefined, "This script will rename all layers in the active composition with sequential numbers.");
    description.wrap = true;
    
    // Add radio buttons for renaming options
    var radioGroup = dialog.add("panel", undefined, "Renaming Options");
    radioGroup.orientation = "column";
    radioGroup.alignChildren = "left";
    radioGroup.margins = 10;
    
    var simpleRadio = radioGroup.add("radiobutton", undefined, "Simple numbering (1, 2, 3, ...)");
    var detailedRadio = radioGroup.add("radiobutton", undefined, "Number with layer type (1_Footage, 2_Text, ...)");
    
    // Set default selection
    simpleRadio.value = true;
    
    // Add buttons
    var buttonGroup = dialog.add("group");
    buttonGroup.orientation = "row";
    buttonGroup.alignment = "right";
    
    var cancelBtn = buttonGroup.add("button", undefined, "Cancel");
    var renameBtn = buttonGroup.add("button", undefined, "Rename Layers");
    renameBtn.active = true;
    
    // Button event handlers
    cancelBtn.onClick = function() {
        dialog.close();
    };
    
    renameBtn.onClick = function() {
        dialog.close();
        if (simpleRadio.value) {
            renameLayersWithNumbers();
        } else {
            renameLayersWithNumbersAndType();
        }
    };
    
    // Show the dialog
    dialog.show();
}

// Run the UI when script is executed
showUI();
