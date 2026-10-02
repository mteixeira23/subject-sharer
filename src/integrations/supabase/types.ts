export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      contests: {
        Row: {
          created_at: string
          current_cycle: number
          id: string
          name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_cycle?: number
          id?: string
          name: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_cycle?: number
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      finance_accounts: {
        Row: {
          created_at: string
          id: string
          name: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      finance_balances: {
        Row: {
          account_id: string
          balance: number
          created_at: string
          date: string
          id: string
          user_id: string
        }
        Insert: {
          account_id: string
          balance?: number
          created_at?: string
          date: string
          id?: string
          user_id: string
        }
        Update: {
          account_id?: string
          balance?: number
          created_at?: string
          date?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "finance_balances_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "finance_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_bill_templates: {
        Row: {
          category: string
          created_at: string
          id: string
          name: string
          user_id: string
        }
        Insert: {
          category?: string
          created_at?: string
          id?: string
          name: string
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      finance_bills: {
        Row: {
          account_id: string | null
          amount: number
          category: string
          created_at: string
          description: string
          due_date: string
          id: string
          paid: boolean
          recurrence_day: number | null
          recurrence_mode: string | null
          type: string
          user_id: string
        }
        Insert: {
          account_id?: string | null
          amount?: number
          category?: string
          created_at?: string
          description?: string
          due_date: string
          id?: string
          paid?: boolean
          recurrence_day?: number | null
          recurrence_mode?: string | null
          type?: string
          user_id: string
        }
        Update: {
          account_id?: string | null
          amount?: number
          category?: string
          created_at?: string
          description?: string
          due_date?: string
          id?: string
          paid?: boolean
          recurrence_day?: number | null
          recurrence_mode?: string | null
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "finance_bills_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "finance_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_transactions: {
        Row: {
          account_id: string | null
          amount: number
          category: string
          created_at: string
          date: string
          description: string
          id: string
          type: string
          user_id: string
        }
        Insert: {
          account_id?: string | null
          amount?: number
          category?: string
          created_at?: string
          date: string
          description?: string
          id?: string
          type?: string
          user_id: string
        }
        Update: {
          account_id?: string | null
          amount?: number
          category?: string
          created_at?: string
          date?: string
          description?: string
          id?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "finance_transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "finance_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      goals: {
        Row: {
          active: boolean
          category: string
          created_at: string
          id: string
          period: string
          target: number
          title: string
          user_id: string
        }
        Insert: {
          active?: boolean
          category: string
          created_at?: string
          id?: string
          period: string
          target: number
          title: string
          user_id: string
        }
        Update: {
          active?: boolean
          category?: string
          created_at?: string
          id?: string
          period?: string
          target?: number
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      habit_completions: {
        Row: {
          created_at: string
          date: string
          habit_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          habit_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          habit_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "habit_completions_habit_id_fkey"
            columns: ["habit_id"]
            isOneToOne: false
            referencedRelation: "habits"
            referencedColumns: ["id"]
          },
        ]
      }
      habits: {
        Row: {
          created_at: string
          icon: string
          id: string
          name: string
          recurrence_days: number[] | null
          recurrence_mode: string
          shift: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          icon?: string
          id?: string
          name: string
          recurrence_days?: number[] | null
          recurrence_mode?: string
          shift?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          icon?: string
          id?: string
          name?: string
          recurrence_days?: number[] | null
          recurrence_mode?: string
          shift?: string | null
          user_id?: string
        }
        Relationships: []
      }
      lessons: {
        Row: {
          correct_answers: number
          created_at: string
          cycle: number
          id: string
          name: string | null
          number: number
          questions_count: number
          review_completed: boolean
          subject_id: string
          theory_completed: boolean
          user_id: string
        }
        Insert: {
          correct_answers?: number
          created_at?: string
          cycle?: number
          id?: string
          name?: string | null
          number: number
          questions_count?: number
          review_completed?: boolean
          subject_id: string
          theory_completed?: boolean
          user_id: string
        }
        Update: {
          correct_answers?: number
          created_at?: string
          cycle?: number
          id?: string
          name?: string | null
          number?: number
          questions_count?: number
          review_completed?: boolean
          subject_id?: string
          theory_completed?: boolean
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lessons_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      mood_entries: {
        Row: {
          created_at: string
          date: string
          id: string
          level: number
          note: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          level: number
          note?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          level?: number
          note?: string | null
          user_id?: string
        }
        Relationships: []
      }
      notification_settings: {
        Row: {
          created_at: string
          enabled: boolean
          habit_reminder: boolean
          habit_reminder_time: string
          id: string
          study_reminder: boolean
          study_reminder_time: string
          task_reminder: boolean
          task_reminder_time: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          enabled?: boolean
          habit_reminder?: boolean
          habit_reminder_time?: string
          id?: string
          study_reminder?: boolean
          study_reminder_time?: string
          task_reminder?: boolean
          task_reminder_time?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          enabled?: boolean
          habit_reminder?: boolean
          habit_reminder_time?: string
          id?: string
          study_reminder?: boolean
          study_reminder_time?: string
          task_reminder?: boolean
          task_reminder_time?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      pomodoro_sessions: {
        Row: {
          completed: boolean
          created_at: string
          date: string
          duration: number
          id: string
          lesson_number: number
          started_at: string
          subject_id: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          date: string
          duration?: number
          id?: string
          lesson_number: number
          started_at: string
          subject_id: string
          user_id: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          date?: string
          duration?: number
          id?: string
          lesson_number?: number
          started_at?: string
          subject_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pomodoro_sessions_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      premium_overrides: {
        Row: {
          created_at: string
          granted_by: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          granted_by: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          granted_by?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          id: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          id: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          id?: string
        }
        Relationships: []
      }
      question_sessions: {
        Row: {
          correct_answers: number
          created_at: string
          date: string
          id: string
          lesson_number: number
          questions_count: number
          subject_id: string
          user_id: string
        }
        Insert: {
          correct_answers?: number
          created_at?: string
          date: string
          id?: string
          lesson_number: number
          questions_count?: number
          subject_id: string
          user_id: string
        }
        Update: {
          correct_answers?: number
          created_at?: string
          date?: string
          id?: string
          lesson_number?: number
          questions_count?: number
          subject_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "question_sessions_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      schedule_events: {
        Row: {
          completed: boolean
          created_at: string
          date: string
          description: string | null
          id: string
          lesson_number: number
          shift: string | null
          subject_id: string
          type: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          date: string
          description?: string | null
          id?: string
          lesson_number: number
          shift?: string | null
          subject_id: string
          type?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          lesson_number?: number
          shift?: string | null
          subject_id?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "schedule_events_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          color: string
          contest_id: string
          created_at: string
          id: string
          name: string
          total_lessons: number
          user_id: string
        }
        Insert: {
          color?: string
          contest_id: string
          created_at?: string
          id?: string
          name: string
          total_lessons?: number
          user_id: string
        }
        Update: {
          color?: string
          contest_id?: string
          created_at?: string
          id?: string
          name?: string
          total_lessons?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subjects_contest_id_fkey"
            columns: ["contest_id"]
            isOneToOne: false
            referencedRelation: "contests"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          completed: boolean
          completed_at: string | null
          completions: string[] | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          priority: string | null
          recurrence_days: number[] | null
          recurrence_mode: string
          shift: string | null
          title: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          completions?: string[] | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          recurrence_days?: number[] | null
          recurrence_mode?: string
          shift?: string | null
          title: string
          user_id: string
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          completions?: string[] | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string | null
          recurrence_days?: number[] | null
          recurrence_mode?: string
          shift?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      workout_logs: {
        Row: {
          created_at: string
          date: string
          exercises: Json
          id: string
          notes: string | null
          shift: string | null
          user_id: string
          workout_type_id: string
        }
        Insert: {
          created_at?: string
          date: string
          exercises?: Json
          id?: string
          notes?: string | null
          shift?: string | null
          user_id: string
          workout_type_id: string
        }
        Update: {
          created_at?: string
          date?: string
          exercises?: Json
          id?: string
          notes?: string | null
          shift?: string | null
          user_id?: string
          workout_type_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workout_logs_workout_type_id_fkey"
            columns: ["workout_type_id"]
            isOneToOne: false
            referencedRelation: "workout_types"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_settings: {
        Row: {
          created_at: string
          id: string
          user_id: string
          weekly_goal: number
          weekly_routine: Json
        }
        Insert: {
          created_at?: string
          id?: string
          user_id: string
          weekly_goal?: number
          weekly_routine?: Json
        }
        Update: {
          created_at?: string
          id?: string
          user_id?: string
          weekly_goal?: number
          weekly_routine?: Json
        }
        Relationships: []
      }
      workout_types: {
        Row: {
          color: string
          created_at: string
          exercises: Json
          id: string
          name: string
          user_id: string
        }
        Insert: {
          color?: string
          created_at?: string
          exercises?: Json
          id?: string
          name: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          exercises?: Json
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
