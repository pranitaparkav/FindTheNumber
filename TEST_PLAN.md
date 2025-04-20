# 🎮 Find The Number - Manual Test Plan

## ✅ Test Plan Objective
To manually validate key features of the number guessing game.

---

## 🧪 Test Cases

| Test Case ID | Title                            | Steps                                                                 | Expected Result                                     | Status |
|--------------|----------------------------------|-----------------------------------------------------------------------|----------------------------------------------------|--------|
| TC01         | Correct guess on first try       | 1. Run the game  
2. Enter correct number  
3. Press guess | Success message: "Congratulations!"                    | Passed |
| TC02         | Wrong guess                      | 1. Run game  
2. Enter wrong number  
3. Press guess | Message: "Try again!" or similar                     | Passed |
| TC03         | Input is not a number            | 1. Run game  
2. Enter "abc"  
3. Press guess   | Error or warning: "Please enter a valid number"     | Passed |
| TC04         | Input left empty                 | 1. Run game  
2. Leave input blank  
3. Press guess  | Warning: "Input cannot be empty"                     | Passed |
| TC05         | Guess is out of range            | 1. Run game  
2. Enter 999  
3. Press guess  | Message: "Number must be between 1 and 100"         | Passed |

---

## 📝 Test Executed By
**Tester:** Pranita  
**Date:** April 20, 2025  
**Browser Used:** Safari
