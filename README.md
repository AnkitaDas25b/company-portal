Title - Company Portal

Description 
Features
Responsive , shift tracker (button on the dashboard to clock in or out of work) 
Day Calendar (meetings on a particular day will be visible)
Task Manager (we can add/edit/delete tasks)
Perks(to view company health ,coffee,mental wellness benefits)


Files Used
main.jsx - bringing react application inside the browser.
It looks inside index.html file, finds a blank div with the ID of "root", and hooks itself directly into it.
App.jsx - it controls the sidebar , activeTab state variable to track which button user clicked on.
App.css  - the style sheet that handles colors, fonts,mobile styling
DashboardHome.jsx -  Contains the quick status attendance shift tracker and office notice alerts.
CalenderView.jsx - loops over 30 times , showing meeting on particular date
TodoList.jsx - stores the changes made by the user in localStorage 
PerksPage.jsx - maps over the array and shows the perks

Places where animation is used 
app.jsx - navigation sidebar slides in smoothly from the left side of the screen
CalenderView.jsx -Hovering your mouse over a calendar date button moves it up slightly  and clicking it makes it briefly shrink down like a real physical button.
PerksPage.jsx - hovering over the card moves it upwards
TodoList.jsx - It starts at height: 0 (squished flat) and grows smoothly to height: 'auto'.
Deletion: When deleted, the row shrinks down to zero height 

Technologies Used
React - hooks like useState and useEffect
Framer Motion (for animation )
Lucide React(for icons)