import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ProjectStatus } from "../../types/Projects";
import { addProject } from "../../store/slices/projectSlice";
import "./AddProjectModal.scss";

interface AddProjectModalProps {
  onClose: () => void;
}

const AddProjectModal: React.FC<AddProjectModalProps> = ({ onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    progress: 0,
    startDate: "",
    endDate: "",
    files: 0,
    teamMembers: 0,
    status: "Not Started" as ProjectStatus,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "progress" || name === "files" ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    const newProject = {
      id: `P-${uuidv4().slice(0, 4)}`,
      ...formData,
    };

    dispatch(addProject({ status: formData.status, project: newProject }));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Add New Project</h2>

        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="number"
          name="progress"
          placeholder="Progress %"
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="text"
          name="teamMembers"
          placeholder="Team Members (e.g. 10+)"
          value={formData.teamMembers}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="number"
          name="files"
          placeholder="Number of Files"
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="form-input"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-input"
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Archived">Archived</option>
        </select>

        <div className="modal-buttons">
          <button onClick={onClose} className="btn cancel-btn">
            Cancel
          </button>
          <button onClick={handleSubmit} className="btn add-btn">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProjectModal;
