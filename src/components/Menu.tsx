import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const menuItems = [
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
                icon: "settings.png",
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

const Menu = () => {
  return (
    <div className='mt-4 text-sm'>
        {menuItems.map((item) => {

            return (
                <div key={item.title} className='flex flex-col gap-2'>
                    <span className='hidden lg:block text-gray-400 font-light my-4'>{item.title}</span>
                    {item.items.map(subItem => (
                        <Link key={subItem.lable} href={subItem.href} className='flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2'>
                            <Image src={`/${subItem.icon}`} alt={subItem.lable} width={20} height={20}></Image>
                            <span className='hidden lg:block'>{subItem.lable}</span>
                        </Link>
                    ))}
                </div>
            )
        })}
    </div>
  )
}

export default Menu