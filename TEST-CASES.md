# ✅ Test Cases: Form Validation Playground

### TC001: Empty Form Submission
- **Input:** Submit without filling anything
- **Expected:** Show error for all fields
- **Actual:** (To be completed by tester)

---

### TC002: Invalid Email
- **Input:** "john.com"
- **Expected:** Show error "Invalid email format"

---

### TC003: Password Mismatch
- **Input:** Password: `abc123`, Confirm: `abc321`
- **Expected:** Show error "Passwords do not match"

---

### TC004: Short Name
- **Input:** Full Name: "A"
- **Expected:** Show error "Name too short"

---

### TC005: Successful Submission
- **Input:** All fields correct
- **Expected:** Success message + form reset
