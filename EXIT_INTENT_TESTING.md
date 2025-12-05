# Exit Intent Popup Testing Guide

## Prerequisites

1. **Clear session storage** before each test:
   - Open browser DevTools (F12)
   - Go to Application/Storage tab
   - Clear Session Storage
   - Or run in console: `sessionStorage.clear()`

## Test Scenarios

### 1. Desktop Exit Intent (Mouse Leave Top)

**Steps:**
1. Clear session storage: `sessionStorage.clear()`
2. Scroll down at least 40% of the page
3. Move your mouse cursor quickly upward toward the browser's address bar/tabs area
4. **Expected:** Popup should appear when mouse leaves the viewport at the top

**Quick Test Command:**
```javascript
// In browser console - simulate exit intent
sessionStorage.clear();
// Scroll down first, then move mouse to top
```

### 2. Mobile Reverse Scroll

**Steps:**
1. Clear session storage: `sessionStorage.clear()`
2. Scroll down at least 40% of the page
3. Quickly scroll back up (reverse scroll)
4. **Expected:** Popup should appear when you scroll up fast

**Quick Test Command:**
```javascript
// In browser console
sessionStorage.clear();
window.scrollTo(0, document.body.scrollHeight * 0.5); // Scroll to 50%
// Then manually scroll up quickly
```

### 3. Mobile Inactivity Timer (8 seconds)

**Steps:**
1. Clear session storage: `sessionStorage.clear()`
2. Scroll down at least 40% of the page
3. Stop all activity (don't move mouse, don't scroll, don't type)
4. Wait 8 seconds
5. **Expected:** Popup should appear after 8 seconds of inactivity

**Quick Test Command:**
```javascript
// In browser console
sessionStorage.clear();
window.scrollTo(0, document.body.scrollHeight * 0.5);
// Wait 8 seconds without any activity
```

### 4. Session Storage - Show Only Once

**Steps:**
1. Clear session storage: `sessionStorage.clear()`
2. Trigger the popup (using any method above)
3. Close the popup
4. Try to trigger it again
5. **Expected:** Popup should NOT appear again (already shown in this session)

**Quick Test Command:**
```javascript
// Check if already shown
console.log(sessionStorage.getItem('exit-intent-shown')); // Should be "1" after first trigger
```

### 5. Form Submission - Never Show Again

**Steps:**
1. Clear session storage: `sessionStorage.clear()`
2. Trigger the popup
3. Submit the form in the popup
4. Try to trigger it again
5. **Expected:** Popup should NEVER appear again (form was submitted)

**Quick Test Command:**
```javascript
// Check if form was submitted
console.log(sessionStorage.getItem('exit-form-submitted')); // Should be "1" after submission
```

### 6. Scroll Threshold (40% requirement)

**Steps:**
1. Clear session storage: `sessionStorage.clear()`
2. Stay at the top of the page (less than 40% scrolled)
3. Try to trigger exit intent (move mouse to top)
4. **Expected:** Popup should NOT appear (hasn't scrolled 40% yet)
5. Scroll down past 40%
6. Try exit intent again
7. **Expected:** Popup should appear now

**Quick Test Command:**
```javascript
// Check scroll percentage
const scrollPercentage = (window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight;
console.log('Scroll percentage:', scrollPercentage * 100 + '%');
// Should be >= 40% for popup to trigger
```

## Quick Testing Script

Run this in your browser console to test all scenarios:

```javascript
// Clear everything
sessionStorage.clear();
console.log('✅ Session storage cleared');

// Check current scroll percentage
const checkScroll = () => {
  const scrollPercentage = (window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight;
  console.log('📊 Scroll percentage:', (scrollPercentage * 100).toFixed(1) + '%');
  return scrollPercentage >= 0.4;
};

// Force scroll to 50%
window.scrollTo(0, document.body.scrollHeight * 0.5);
setTimeout(() => {
  console.log('✅ Scrolled to 50%');
  console.log('✅ Exit intent should now work');
  console.log('👉 Try moving mouse to top of browser');
}, 500);

// Check session storage status
setInterval(() => {
  const shown = sessionStorage.getItem('exit-intent-shown');
  const submitted = sessionStorage.getItem('exit-form-submitted');
  if (shown === '1') console.log('⚠️ Popup already shown in this session');
  if (submitted === '1') console.log('✅ Form already submitted - popup disabled');
}, 2000);
```

## Manual Testing Checklist

- [ ] Desktop exit intent works (mouse to top)
- [ ] Mobile reverse scroll works (scroll up fast)
- [ ] Mobile inactivity timer works (8 seconds)
- [ ] Popup only shows once per session
- [ ] Popup doesn't show if form was submitted
- [ ] Popup doesn't show if user hasn't scrolled 40%
- [ ] Script loads only when popup opens (check Network tab)
- [ ] Form displays completely (1189px height)
- [ ] Close button works
- [ ] Backdrop click closes popup

## Debugging Tips

### Check if listeners are active:
```javascript
// In console - check if popup component is mounted
document.querySelector('[id*="popup-lQlaCEy5o9hc5JZ1Fw0Y"]') ? '✅ Popup iframe exists' : '❌ Popup not found'
```

### Check session storage:
```javascript
console.log({
  'exit-intent-shown': sessionStorage.getItem('exit-intent-shown'),
  'exit-form-submitted': sessionStorage.getItem('exit-form-submitted')
});
```

### Force trigger popup (for testing):
```javascript
// WARNING: Only for testing - bypasses normal checks
sessionStorage.removeItem('exit-intent-shown');
// Then manually trigger by moving mouse to top
```

### Check scroll percentage:
```javascript
const scrollPct = ((window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight * 100).toFixed(1);
console.log(`Scrolled: ${scrollPct}%`);
```

## Common Issues

1. **Popup not showing:**
   - Check if you've scrolled 40%: `(window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight >= 0.4`
   - Check if already shown: `sessionStorage.getItem('exit-intent-shown')`
   - Check if form submitted: `sessionStorage.getItem('exit-form-submitted')`

2. **Popup showing multiple times:**
   - Check session storage is being set: `sessionStorage.getItem('exit-intent-shown')`
   - Clear and test again: `sessionStorage.clear()`

3. **Form not loading:**
   - Check Network tab for script: `https://app.waylott.com/js/form_embed.js`
   - Script should load only when popup opens

## Browser-Specific Notes

- **Chrome/Edge:** Exit intent works best
- **Firefox:** May need slightly different mouse movement
- **Safari:** Exit intent detection may be less reliable
- **Mobile browsers:** Use reverse scroll or inactivity timer instead

