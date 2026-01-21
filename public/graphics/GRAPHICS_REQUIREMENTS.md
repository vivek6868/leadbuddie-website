# Graphics Requirements for Hero Section

This document lists all the graphics/images needed for the animated hero section.

## Required Graphics Files

### Icons (`/graphics/icons/`)

1. **whatsapp-bubble.svg**
   - **Description**: WhatsApp chat bubble icon
   - **Size**: 48x48px recommended
   - **Color**: Teal/cyan (#22d3ee or #0ea5a4) with 60% opacity
   - **Style**: Outline or filled, should match teal theme
   - **Usage**: Top left floating animation

2. **chat-bubble-1.svg**
   - **Description**: Larger chat message bubble with checkmark
   - **Size**: 128x40px recommended
   - **Color**: Teal outline (#22d3ee) with 40% opacity, transparent fill
   - **Style**: Rounded rectangle with checkmark icon on right side
   - **Usage**: Left side chat bubbles animation

3. **chat-bubble-2.svg**
   - **Description**: Smaller chat message bubble with checkmark
   - **Size**: 112x32px recommended
   - **Color**: Teal outline (#22d3ee) with 40% opacity, transparent fill
   - **Style**: Rounded rectangle with checkmark icon on right side
   - **Usage**: Left side chat bubbles animation (second bubble)

4. **code-icon.svg**
   - **Description**: Code brackets icon (`</>`)
   - **Size**: 32x32px recommended
   - **Color**: Teal/cyan (#22d3ee) with 60% opacity
   - **Style**: Simple code brackets symbol
   - **Usage**: Below chat bubbles with pulse animation

5. **rocket.svg**
   - **Description**: Rocket icon pointing upward
   - **Size**: 40x40px recommended
   - **Color**: Teal/cyan (#22d3ee) with 60% opacity
   - **Style**: Rocket silhouette, will be rotated 45 degrees
   - **Usage**: Top right with bounce animation

### Metrics (`/graphics/metrics/`)

6. **roas-badge.svg**
   - **Description**: ROAS (Return on Ad Spend) metric badge
   - **Size**: 80x36px recommended
   - **Color**: Teal background (#22d3ee with 20% opacity), teal border, white/teal text
   - **Style**: Pill-shaped badge with upward trending arrow icon and "ROAS" text
   - **Usage**: Top right area with fade-in animation

7. **revenue-badge.svg**
   - **Description**: Revenue metric badge
   - **Size**: 100x36px recommended
   - **Color**: Teal background (#22d3ee with 20% opacity), teal border, white/teal text
   - **Style**: Pill-shaped badge with upward trending arrow icon and "Revenue" text
   - **Usage**: Right side with fade-in animation

### Hero Graphics (`/graphics/hero/`)

8. **wavy-line-graph.svg**
   - **Description**: Wavy line graph connecting elements
   - **Size**: 256x192px recommended
   - **Color**: Teal gradient (#22d3ee to #0ea5a4) with 30% opacity
   - **Style**: Smooth wavy line with dashed pattern, connecting left to right
   - **Usage**: Background connecting element with draw animation

9. **hero-dashboard.png** (or .jpg/.webp)
   - **Description**: Main hero section dashboard/product screenshot
   - **Size**: 800x800px recommended (square aspect ratio)
   - **Format**: PNG, JPG, or WebP
   - **Style**: Product dashboard screenshot showing LeadBuddie interface
   - **Usage**: Right side of hero section in ScreenshotFrame component

### Partners (`/graphics/partners/`)

9. **partner-badges.svg**
   - **Description**: Partner logos section with WhatsApp badge
   - **Size**: 280x80px recommended
   - **Color**: White text/icons on semi-transparent dark background
   - **Style**: 
     - Container: Rounded rectangle with white/10 background, white/20 border
     - Text: "Optimized for WhatsApp Business" (small text at top)
     - WhatsApp logo: Green WhatsApp icon + "WhatsApp Business" text
   - **Usage**: Bottom right corner with fade-in animation

## Design Guidelines

### Color Palette
- **Primary Teal**: `#22d3ee` (cyan-400)
- **Secondary Teal**: `#0ea5a4` (teal-500)
- **Opacity Levels**: 
  - Icons: 60% opacity
  - Chat bubbles: 40% opacity
  - Background elements: 30% opacity

### Style Requirements
- All graphics should be SVG format for scalability
- Use outline/stroke style for icons (not filled)
- Maintain consistent stroke width (1.5-2px)
- Ensure graphics work on dark background (#0B1F33)
- All text should be readable and properly sized

### Animation Considerations
- Graphics will be animated (float, fade, slide, bounce)
- Ensure graphics look good at various sizes
- Keep file sizes small for performance
- Use SVG for crisp rendering at all sizes

## File Structure

```
public/graphics/
├── icons/
│   ├── whatsapp-bubble.svg
│   ├── chat-bubble-1.svg
│   ├── chat-bubble-2.svg
│   ├── code-icon.svg
│   └── rocket.svg
├── metrics/
│   ├── roas-badge.svg
│   └── revenue-badge.svg
├── hero/
│   └── wavy-line-graph.svg
└── partners/
    └── partner-badges.svg
```

## Notes

- All graphics should be optimized SVG files
- Icons can be created using design tools like Figma, Illustrator, or online SVG editors
- Partner logos should match official brand guidelines
- Test graphics on dark background to ensure visibility
- Consider creating graphics in both light and dark variants if needed

