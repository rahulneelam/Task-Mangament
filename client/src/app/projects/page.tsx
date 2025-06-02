"use client";

import React, { useState } from "react";
import { useGetProjectsQuery } from "@/state/api";
import Header from "@/components/Header";
import { Plus } from "lucide-react";
import ModalNewProject from "./ModalNewProject";
import Link from "next/link";

const ProjectsPage = () => {
  const [isModalNewProjectOpen, setIsModalNewProjectOpen] = useState(false);
  const { data: projects, isLoading, error } = useGetProjectsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching projects</div>;

  return (
    <div className="mx-auto w-full max-w-7xl p-8">
      <ModalNewProject
        isOpen={isModalNewProjectOpen}
        onClose={() => setIsModalNewProjectOpen(false)}
      />
      
      <Header
        name="Projects"
        buttonComponent={
          <button
            className="flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
            onClick={() => setIsModalNewProjectOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </button>
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects?.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block"
          >
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:bg-dark-secondary">
              <h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                {project.name}
              </h3>
              {project.description && (
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              )}
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                {project.startDate && (
                  <span>
                    Start: {new Date(project.startDate).toLocaleDateString()}
                  </span>
                )}
                {project.endDate && (
                  <span>
                    End: {new Date(project.endDate).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {projects?.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
              No projects yet
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Get started by creating your first project.
            </p>
            <button
              className="flex items-center rounded bg-blue-primary px-4 py-2 text-white hover:bg-blue-600"
              onClick={() => setIsModalNewProjectOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;