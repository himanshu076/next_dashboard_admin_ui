

export const IMAGES = {
    icons: {
        announcement: "/announcement.png",
        assignment: "/assignment.png",
        attendance: "/attendance.png",
        avatar: "/avatar.png",
        blood: "/blood.png",
        calendar: "/calendar.png",
        class: "/class.png",
        close: "/close.png",
        create: "/create.png",
        date: "/date.png",
        delete: "/delete.png",
        exam: "/exam.png",
        filter: "/filter.png",
        finance: "/finance.png",
        home: "/home.png",
        lesson: "/lesson.png",
        logo: "/logo.png",
        logout: "/logout.png",
        mail: "/mail.png",
        maleFemale: "/maleFemale.png",
        message: "/message.png",
        more: "/more.png",
        moreDark: "/moreDark.png",
        parent: "/parent.png",
        phone: "/phone.png",
        profile: "/profile.png",
        result: "/result.png",
        search: "/search.png",
        setting: "/setting.png",
        singleAttendance: "/singleAttendance.png",
        singleBranch: "/singleBranch.png",
        singleClass: "/singleClass.png",
        singleLesson: "/singleLesson.png",
        sort: "/sort.png",
        student: "/student.png",
        subject: "/subject.png",
        teacher: "/teacher.png",
        update: "/update.png",
        upload: "/upload.png",
        view: "/view.png",
    }
}

export const role = "admin";

export const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "home.png",
                lable: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "teacher.png",
                lable: "Teachers",
                href: "/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "student.png",
                lable: "Students",
                href: "/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "parent.png",
                lable: "Parents",
                href: "/parents",
                visible: ["admin", "teacher"],
            },
            {
                icon: "subject.png",
                lable: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "class.png",
                lable: "Classes",
                href: "/classes",
                visible: ["admin", "teacher"],
              },
            {
                icon: "lesson.png",
                lable: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: "exam.png",
                lable: "Exams",
                href: "/list/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "assignment.png",
                lable: "Assignments",
                href: "/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "result.png",
                lable: "Results",
                href: "/list/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "attendance.png",
                lable: "Attendance",
                href: "/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "calendar.png",
                lable: "Calendar",
                href: "/calendar",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "announcement.png",
                lable: "Announcements",
                href: "/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            }
        ]
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "profile.png",
                lable: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "setting.png",
                lable: "Setting",
                href: "/setting",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: "logout.png",
                lable: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent"],
            }
        ]
    }
]

export const countChartData = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: '25-29',
    count: 53,
    fill: '#C3EBFA',
  },
];

export const attendanceChartData = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 60,
  },
  {
    name: 'Wed',
    present: 90,
    absent: 75,
  },
  {
    name: 'Thu',
    present: 90,
    absent: 75,
  },
  {
    name: 'Fri',
    present: 65,
    absent: 55,
  },
];

export const financeChartData = [
  {
    name: 'Jan',
    income: 4000,
    expence: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expence: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expence: 9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expence: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expence: 4800,
  },
  {
    name: 'June',
    income: 2390,
    expence: 3800,
  },
  {
    name: 'July',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Sept',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expence: 4300,
  },
];

// TEMPORARY
export const calendarEvents = [
  {
    id: 1,
    title: "Lorem Ipsum is simply",
    time: "12:00 PM - 2:00 PM",
    description: "It was popularised in the 1960s",
  },
  {
    id: 12,
    title: "Contrary to popular belief",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem Ipsum is not simply random text.",
  },
  {
    id: 3,
    title: "de Finibus Bonorum et Malorum",
    time: "12:00 PM - 2:00 PM",
    description: "very popular during the Renaissance.",
  },
];
