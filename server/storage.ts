import { users, type User, type InsertUser, contactForms, type InsertContactForm } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactForm(formData: InsertContactForm): Promise<InsertContactForm>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactFormData: InsertContactForm[];
  currentId: number;

  constructor() {
    this.users = new Map();
    this.contactFormData = [];
    this.currentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactForm(formData: InsertContactForm): Promise<InsertContactForm> {
    this.contactFormData.push(formData);
    return formData;
  }
}

export const storage = new MemStorage();
