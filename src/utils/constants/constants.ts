

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

export const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "home.png",
                lable: "Home",
                href: "/",
            },
            {
                icon: "teacher.png",
                lable: "Teachers",
                href: "/teachers",
            },
            {
                icon: "student.png",
                lable: "Students",
                href: "/students",
            },
            {
                icon: "parent.png",
                lable: "Parents",
                href: "/parents",
            },
            {
                icon: "class.png",
                lable: "Classes",
                href: "/classes",
            },
            {
                icon: "lesson.png",
                lable: "Lessons",
                href: "/lessons",
            },
            {
                icon: "exam.png",
                lable: "Exams",
                href: "/exams",
            },
            {
                icon: "assignment.png",
                lable: "Assignments",
                href: "/assignments",
            },
            {
                icon: "attendance.png",
                lable: "Attendance",
                href: "/attendance",
            },
            {
                icon: "calendar.png",
                lable: "Calendar",
                href: "/calendar",
            },
            {
                icon: "announcement.png",
                lable: "Announcements",
                href: "/announcements",
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
            },
            {
                icon: "setting.png",
                lable: "Setting",
                href: "/setting",
            },
            {
                icon: "logout.png",
                lable: "Logout",
                href: "/logout",
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
