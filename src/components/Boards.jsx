import React from "react";

const projectSections = [
  {
    name: "To do",
    tasks: [
      {
        priority: "HIGH",
        image: "/image/img1.jpg",
        title: "Update Website Homepage",
        description:
          "Revise the content and layout of the homepage to highlight new features and improve user engagement.",
        users: ["/image/p1.jpg", "/image/p2.jpg"],
      },
    ],
  },
  {
    name: "In progress",
    tasks: [
      {
        priority: "LOW",
        title: "Bug Fix - User Registration",
        description:
          "Investigate and resolve the reported bug in the user registration process where some users are unable to sign up.",
        users: ["/image/p4.jpg"],
      },
      {
        priority: "MEDIUM",
        image: "/image/img2.jpg",
        title: "Social Media Campaign",
        description:
          "Plan and execute a social media campaign for the upcoming product launch in February.",
        users: ["/image/p3.jpg", "/image/p4.jpg"],
      },
    ],
  },
  {
    name: "Under Review",
    tasks: [
      {
        priority: "HIGH",
        title: "Mobile App Feature - Push Notifications",
        description:
          "Implement push notification feature for the mobile app to enhance user engagement. Ensure compatibility with both iOS and Android platforms.",
        users: ["/image/p5.jpg"],
      },
    ],
  },
  {
    name: "Done",
    tasks: [
      {
        priority: "LOW",
        title: "Content Creation - Blog Post",
        description:
          "Write and publish a blog post about industry trends and their impact on our products/services.",
        users: ["/image/p2.jpg"],
      },
      {
        priority: "MEDIUM",
        image: "/image/img3.jpg",
        title: "IT Security Audit",
        description:
          "Write and publish a blog post about industry trends and their impact on our products/services.",
        users: ["/image/p5.jpg"],
      },
    ],
  },
];

export default function ProjectBoard() {
  return (
    <div className="min-h-screen bg-gray-300 p-4 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mt-6 mb-4">Boards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectSections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
              <div className="space-y-4">
                {section.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="bg-white shadow rounded-lg p-4">
                    <button
                      className={`${
                        task.priority === "HIGH"
                          ? "bg-pink-500 hover:bg-pink-400"
                          : task.priority === "MEDIUM"
                          ? "bg-blue-400 hover:bg-blue-300"
                          : "bg-green-500 hover:bg-green-400"
                      } text-white text-xs px-2 py-1 rounded cursor-pointer`}
                    >
                      {task.priority}
                    </button>
                    {task.image && (
                      <img
                        src={task.image}
                        alt="card"
                        className="w-full h-32 object-cover rounded-2xl my-2"
                      />
                    )}
                    <h4 className="font-bold">{task.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      {task.users.map((user, userIndex) => (
                        <img
                          key={userIndex}
                          src={user}
                          alt="user"
                          className="w-6 h-6 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
