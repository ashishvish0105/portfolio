# Contact Form Code Reference

## Component Imports
```javascript
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send, CheckCircle2, AlertCircle, Loader } from "lucide-react";
import { SectionHeader } from "./About";
import emailjs from "@emailjs/browser";
```

## Utility Functions

### EmailJS Initialization
```javascript
const initializeEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};
```
**Purpose**: Initialize EmailJS with public key on component mount
**When**: Called once in useEffect

### Email Validation
```javascript
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```
**Purpose**: Validate email format using regex
**Returns**: true if valid, false otherwise

## State Management

```javascript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});
const [loading, setLoading] = useState(false);        // Sending state
const [status, setStatus] = useState(null);           // 'success' | 'error' | null
const [statusMessage, setStatusMessage] = useState(""); // Message to display
const [errors, setErrors] = useState({});             // Field errors
```

## Hook Usage

### EmailJS Initialization Effect
```javascript
useEffect(() => {
  initializeEmailJS();
}, []);
```
**Purpose**: Initialize EmailJS once when component mounts
**Dependencies**: [] (empty array = run only once)

## Core Functions

### Form Validation
```javascript
const validateForm = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
```
**Purpose**: Validate all form fields and collect errors
**Returns**: true if valid, false if any errors
**Updates**: errors state with field-specific error messages

### Handle Input Change
```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  // Clear error for this field when user starts typing
  if (errors[name]) {
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }
};
```
**Purpose**: Update form data and clear field errors in real-time
**Triggered**: onChange event on any input/textarea

### Handle Form Submission
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    return; // Don't send if validation fails
  }

  setLoading(true);
  setStatus(null);

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        to_email: "ashishvish0105@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    );

    if (response.status === 200) {
      setStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  } catch (error) {
    console.error("EmailJS error:", error);
    setStatus("error");
    setStatusMessage(
      error.text || "Failed to send message. Please try again later or contact directly."
    );

    // Clear error message after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  } finally {
    setLoading(false);
  }
};
```
**Purpose**: Handle form submission with validation, email sending, and feedback
**Flow**:
1. Prevent default form submission
2. Validate form
3. Set loading state
4. Send email via EmailJS
5. Handle success/error
6. Reset form on success
7. Auto-clear status messages

## JSX Patterns

### Success Message Banner
```javascript
{status === "success" && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="mb-6 p-4 md:p-5 border border-green-500/50 bg-green-500/10 rounded-lg flex items-start gap-3"
  >
    <CheckCircle2 className="size-5 text-green-400 flex-shrink-0 mt-0.5" />
    <div>
      <p className="text-sm md:text-base text-green-400 font-medium">Success!</p>
      <p className="text-xs md:text-sm text-green-400/80 mt-1">{statusMessage}</p>
    </div>
  </motion.div>
)}
```
**Key Features**:
- Conditional rendering (status === "success")
- Framer Motion animations
- Responsive padding and text sizes
- Icon with status message

### Error Message Banner
```javascript
{status === "error" && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="mb-6 p-4 md:p-5 border border-red-500/50 bg-red-500/10 rounded-lg flex items-start gap-3"
  >
    <AlertCircle className="size-5 text-red-400 flex-shrink-0 mt-0.5" />
    <div>
      <p className="text-sm md:text-base text-red-400 font-medium">Error</p>
      <p className="text-xs md:text-sm text-red-400/80 mt-1">{statusMessage}</p>
    </div>
  </motion.div>
)}
```
**Key Features**: Same as success but with red colors and AlertCircle icon

### Field Component (Reusable Input)
```javascript
function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  disabled,
}) {
  return (
    <div>
      <label className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`mt-2 w-full bg-transparent border-b outline-none py-2 text-sm md:text-base text-foreground placeholder:text-muted-foreground/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? "border-red-500/50" : "border-border focus:border-glow"
        }`}
      />
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
```
**Purpose**: Reusable input component for consistent styling
**Props**:
- `label`: Input label text
- `name`: Input name attribute
- `type`: Input type (text, email, etc.)
- `value`: Current input value
- `onChange`: Change handler function
- `error`: Error message (if any)
- `disabled`: Whether input is disabled
**Styling Features**:
- Conditional border color (red if error, glow on focus)
- Disabled state styling
- Error message display
- Responsive text sizes

### Button with Loading State
```javascript
<button
  type="submit"
  disabled={loading}
  className="group inline-flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 bg-foreground text-background font-mono text-xs font-semibold uppercase tracking-widest hover:bg-glow transition-all duration-300 active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loading ? (
    <>
      <Loader className="size-3 md:size-3.5 animate-spin" />
      Sending...
    </>
  ) : (
    <>
      Send Message
      <Send className="size-3 md:size-3.5 transition-transform group-hover:translate-x-1" />
    </>
  )}
</button>
```
**Key Features**:
- Conditional rendering based on loading state
- Spinning loader animation
- Disabled state on loading
- Hover effect on normal state
- Icon animation on hover

## Environment Variables

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```
**Access in code**: `import.meta.env.VITE_EMAILJS_*`

## Data Flow

```
User fills form
    ↓
handleChange updates formData + clears errors
    ↓
User clicks Submit
    ↓
handleSubmit (async)
    ├─ validateForm() → collects errors
    ├─ if errors: return (show inline errors)
    └─ if valid:
        ├─ setLoading(true) → disable inputs, show spinner
        ├─ emailjs.send() → API call
        ├─ if success:
        │   ├─ setStatus("success")
        │   ├─ show success banner
        │   ├─ reset form
        │   └─ auto-clear after 5s
        └─ if error:
            ├─ setStatus("error")
            ├─ show error banner
            └─ auto-clear after 5s
```

## Tailwind Classes Used

| Class | Purpose |
|-------|---------|
| `mt-2` | Margin top |
| `w-full` | Full width |
| `bg-transparent` | Transparent background |
| `border-b` | Bottom border only |
| `focus:border-glow` | Glow on focus |
| `disabled:opacity-50` | Disabled appearance |
| `text-red-400` | Red text color |
| `text-green-400` | Green text color |
| `animate-spin` | Spinning animation |
| `hover:bg-glow` | Glow background on hover |
| `transition-all` | Smooth transitions |

## Testing Checklist

- [ ] Fill form with valid data → Send
- [ ] Leave empty field → Show validation error
- [ ] Enter invalid email → Show email error
- [ ] Send → Loading spinner appears
- [ ] After success → Green banner + form reset
- [ ] Network error → Red banner
- [ ] Status message auto-clears after 5s
- [ ] Email received in inbox
- [ ] Check spam folder if not found
- [ ] Test on mobile device
