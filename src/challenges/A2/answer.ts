/**
 * In this challenge, you have to add a list of skills to each group (based on
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 *
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

import { setUncaughtExceptionCaptureCallback } from "process";

// ↓ uncomment bellow lines and add your response!

/* export default function ({ groups }: { groups: Group[] }): Group[] {
    
    
    
    
    return groups;
} */

function addSkill(skills: string[], skillToAdd: string): string[] {
  if (!skills.includes(skillToAdd)) {
    skills.push(skillToAdd);
  }

  return skills.sort();
}

// used interfaces, do not touch
interface Student {
  name: string;
  age: number;
  skills: string[];
}

export interface Group {
  students: Student[];
  name: string;
}

export interface GroupWithSkills extends Group {
  skills: string[];
}
