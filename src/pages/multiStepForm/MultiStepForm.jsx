import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MultiStepForm.module.css'; // Correctly import the new CSS module

const MultiStepForm = ({ closeModal }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nationality: '',
    family_size: '',
    conjoint: false,
    nameWork: '',
    city: '',
    industry: '',
    location: { latitude: '', longitude: '' },
    budget_min: '',
    budget_max: '',
    car: false,
    children: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleChildChange = (index, e) => {
    const { name, value } = e.target;
    const newChildren = [...formData.children];
    newChildren[index][name] = value;
    setFormData(prev => ({ ...prev, children: newChildren }));
  };

  const addChild = () => {
    const maxChildren = formData.conjoint
      ? Number(formData.family_size) - 2
      : Number(formData.family_size) - 1;
    
    if (formData.children.length < maxChildren && maxChildren > 0) {
      setFormData(prev => ({
        ...prev,
        children: [
          ...prev.children,
          { fullName: '', age: '', currentGrade: '', educationStage: '', preferredCurriculum: '' }
        ]
      }));
    } else {
      alert(`Based on your family size, you cannot add more than ${maxChildren} children.`);
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Form Data:', formData);
    navigate('/criteria');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.formStep}>
            <h3>Complete your information</h3>
            <input name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Nationality" required />
            <input name="family_size" type="number" value={formData.family_size} onChange={handleChange} placeholder="Family Size" min="1" required />
            <label className={styles.checkboxLabel}>
              <input name="conjoint" type="checkbox" checked={formData.conjoint} onChange={handleChange} />
              Are you relocating with a conjoint?
            </label>
            <div className={styles.buttonGroup}>
              <button type="button" onClick={nextStep} className={styles.formButton}>Next</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className={styles.formStep}>
            <h3>Work Information</h3>
            <input name="nameWork" value={formData.nameWork} onChange={handleChange} placeholder="Occupation / Job Title" />
            <input name="city" value={formData.city} onChange={handleChange} placeholder="Work City" />
            <input name="industry" value={formData.industry} onChange={handleChange} placeholder="Industry" />
            <input name="latitude" value={formData.location.latitude} onChange={(e) => setFormData(prev => ({ ...prev, location: { ...prev.location, latitude: e.target.value } }))} placeholder="Work Location Latitude" />
            <input name="longitude" value={formData.location.longitude} onChange={(e) => setFormData(prev => ({ ...prev, location: { ...prev.location, longitude: e.target.value } }))} placeholder="Work Location Longitude" />
            <div className={styles.buttonGroup}>
              <button type="button" onClick={prevStep} className={`${styles.formButton} ${styles.backButton}`}>Back</button>
              <button type="button" onClick={nextStep} className={styles.formButton}>Next</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={styles.formStep}>
            <h3>Financial & Lifestyle</h3>
            <input name="budget_min" type="number" value={formData.budget_min} onChange={handleChange} placeholder="Minimum Housing Budget (AED)" />
            <input name="budget_max" type="number" value={formData.budget_max} onChange={handleChange} placeholder="Maximum Housing Budget (AED)" />
            <label className={styles.checkboxLabel}>
              <input name="car" type="checkbox" checked={formData.car} onChange={handleChange} />
              Will you own a car?
            </label>
            <div className={styles.buttonGroup}>
              <button type="button" onClick={prevStep} className={`${styles.formButton} ${styles.backButton}`}>Back</button>
              <button type="button" onClick={nextStep} className={styles.formButton}>Next</button>
            </div>
          </div>
        );
      case 4:
        const maxChildren = formData.conjoint ? Number(formData.family_size) - 2 : Number(formData.family_size) - 1;
        const canAddMoreChildren = formData.children.length < maxChildren;

        return (
          <div className={styles.formStep}>
            <h3>Add Your Children's Details</h3>
            {formData.children.map((child, index) => (
              <div key={index} className={styles.childForm}>
                <h4>Child {index + 1}</h4>
                <input name="fullName" value={child.fullName} onChange={(e) => handleChildChange(index, e)} placeholder="Full Name" />
                <input name="age" type="number" value={child.age} onChange={(e) => handleChildChange(index, e)} placeholder="Age" />
                <input name="currentGrade" value={child.currentGrade} onChange={(e) => handleChildChange(index, e)} placeholder="Current Grade" />
                <input name="educationStage" value={child.educationStage} onChange={(e) => handleChildChange(index, e)} placeholder="Education Stage (e.g., KG, Elementary)" />
                <input name="preferredCurriculum" value={child.preferredCurriculum} onChange={(e) => handleChildChange(index, e)} placeholder="Preferred Curriculum (e.g., IB, British)" />
              </div>
            ))}
            {canAddMoreChildren && maxChildren > 0 && (
              <button type="button" onClick={addChild} className={`${styles.formButton} ${styles.addChildButton}`}>Add Another Child</button>
            )}
            {maxChildren <= 0 && <p>Based on your family size, you can proceed without adding children.</p>}
            <div className={styles.buttonGroup}>
              <button type="button" onClick={prevStep} className={`${styles.formButton} ${styles.backButton}`}>Back</button>
              <button type="submit" className={styles.formButton}>Submit and Find</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          {renderStep()}
        </form>
        <button onClick={closeModal} className={styles.closeModalButton}>&times;</button>
      </div>
    </div>
  );
};

export default MultiStepForm;